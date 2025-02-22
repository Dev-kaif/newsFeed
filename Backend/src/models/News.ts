import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: String,
  category: String,
  content: String,
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("News", NewsSchema);
