import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGO_URL } from "./config";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL as string);
  } catch (error) {
    process.exit(1);
  }
};

export default connectDB;
