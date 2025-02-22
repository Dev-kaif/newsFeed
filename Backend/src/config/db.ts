import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string || "mongodb+srv://kaifghalib123:KhLjaiiKNGzfm1wC@cluster0.mt9u1.mongodb.net/news");
  } catch (error) {
    process.exit(1);
  }
};

export default connectDB;
