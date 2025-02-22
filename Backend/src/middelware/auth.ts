import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';


export default function userAuth(req:Request,res:Response,next:NextFunction){
    const token = req.headers.token;

    const response = jwt.verify(token as string ,JWT_SECRET as string)

    if(response){
        req.userId = (response as JwtPayload).id;
        next()
    }else{
        res.status(403).json({message:"invalid Credensials"})
    }
}

