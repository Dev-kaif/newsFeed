import { Request, Response } from "express";
import axios from "axios";
import { sendNewNews } from "../app";

// API Key (ensure to store in environment variables)
const NEWS_API_KEY = process.env.NEWS_API_KEY || "a6a9f67714624c539689d1ad497c1ea9";
const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";

// Define TypeScript Interface for News API Response
interface Article {
  title: string;
  content: string;
  category: string;
  url: string;
  image: string | null;
  source: string;
  publishedAt: string;
}

interface NewsApiResponse {
  articles: {
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    source: { name: string };
    publishedAt: string;
  }[];
}

export const getNews = async (req: Request, res: Response) => {
  try {
    const response = await axios.get<NewsApiResponse>(NEWS_API_URL, {
      params: {
        country: "us",
        category: req.query.category || "general",
        apiKey: NEWS_API_KEY,
      },
    });

    // Transform response to match our Article interface
    const articles: Article[] = response.data.articles.map((article) => ({
      title: article.title,
      content: article.description || "No description available",
      category: (req.query.category as string) || "general",
      url: article.url,
      image: article.urlToImage,
      source: article.source.name,
      publishedAt: article.publishedAt,
    }));

    // Emit each article using WebSocket (Socket.io)
    articles.forEach((newsItem) => sendNewNews(newsItem));

    // Send response
    res.json(articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news" });
  }
};
