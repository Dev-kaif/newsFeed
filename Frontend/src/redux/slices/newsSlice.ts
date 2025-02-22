import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, store } from "../store";
import socket from "../../utils/socket";

interface NewsItem {
  _id: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  views: number;
  createdAt: string;
}

interface NewsState {
  news: NewsItem[];
}

const initialState: NewsState = { news: [] };

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.news = action.payload;
    },
    updateNews: (state, action: PayloadAction<NewsItem>) => {
      const index = state.news.findIndex((item) => item._id === action.payload._id);
      if (index !== -1) {
        state.news[index] = action.payload;
      }
    },
  },
});

export const { setNews, updateNews } = newsSlice.actions;
export const selectNews = (state: RootState) => state.news.news;
export default newsSlice.reducer;

// Listen for WebSocket events
socket.on("news_update", (data: NewsItem[]) => {
  store.dispatch(setNews(data));
});
