import dotenv from 'dotenv';

dotenv.config()

export const JWT_SECRET = process.env.JWT_SECRET
export const NEWS_API_KEY = process.env.NEWS_API_KEY;
export const MONGO_URL = process.env.MONGO_URL;
