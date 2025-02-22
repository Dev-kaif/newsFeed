import { Request, Response, Router } from "express"
import { z } from "zod";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
const JWT_USER_SECRET  = "Kaif123"

const authRoutes = Router()
const saltRounds = 5;

const reqBody = z.object({
    name : z.string().max(100).min(1),
    email:z.string().max(100).min(5),
    password: z.string().max(30).min(5)
})


authRoutes.post('/signUp',async (req:Request,res:Response)=>{
    
    const safeParseData = reqBody.safeParse(req.body);

    if(!safeParseData.success){
        res.status(400).json({
            message: "Invalid input format",
            errors: safeParseData.error.errors
        });
        return;
    }

    try{
        const {name,email,password} = safeParseData.data;

        const hash = await bcrypt.hash(password,saltRounds)

        await User.create({
            email:email,
            password:hash,
            name:name,
        })

        res.json({
            message: "User signed up successfully"
        });

    }catch (err) {
        res.json({
            message: "User already exists"
        });
    }

})

authRoutes.post('/signIn',async (req:Request,res:Response)=>{
    type signInData = Pick<(z.infer<typeof reqBody> ), "email" | "password">

    const {email,password}:signInData = req.body;

    if(!email || !password){
        res.json({message:"Fill all the Required Fields"})
        return;
    }

    const response = await User.findOne({
        email:email
    })

    if (!response) {
        res.json({ message: "Please Sign up" });
        return ;
    }

    const match = await bcrypt.compare(password,response.password);

    if(match){
        const token = jwt.sign({ id: response._id },JWT_USER_SECRET);
        res.json({token:token,message:"You have sucessfully Signed In"})

    }else {
        res.status(403).json({message: "Incorrect credentials"});
    }
})


export default authRoutes
