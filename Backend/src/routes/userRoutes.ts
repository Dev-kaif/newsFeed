import { Request, Response } from "express";
import User from "../models/User";

export default async function useRoutes(req: Request, res: Response) {
    try {
        const { categories }: { userId: string; categories: string[] } = req.body;
        const userId = req.userId;

        if (!userId) {
            res.status(400).json({ message: "User ID is required" });
            return; 
        }

        await User.findByIdAndUpdate(userId, {
            $set: { subscribedCategories: categories },
        });

        res.json({ message: "Added categories" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
