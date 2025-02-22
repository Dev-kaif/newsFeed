import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import connectDB from "./config/db";
import newsRoutes from "./routes/newsRoutes";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import userAuth from "./middelware/auth";

dotenv.config();
connectDB();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes );
app.use(userAuth)
app.use("/api/user",userRoutes);
app.use("/api/news",newsRoutes);


// Function to send new news to all clients
const sendNewNews = (newsItem: any) => {
  io.emit("newNews", newsItem); // Broadcast new news
};

export { app, server,io,sendNewNews };
