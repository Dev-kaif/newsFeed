import { Request, Response } from "express";
import axios from "axios";
import { sendNewNews } from "../app";

const NEWS_API_KEY = process.env.NEWS_API_KEY || "a6a9f67714624c539689d1ad497c1ea9";
const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";


export const getNews = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: "us", // Change country as needed
        category: req.query.category || "general", // Optional category filter
        apiKey: NEWS_API_KEY,
      },
    });

    const articles = response.data.articles.map((article: any) => ({
      title: article.title,
      content: article.description || "No description available",
      category: req.query.category || "general",
      url: article.url,
      image: article.urlToImage,
      source: article.source.name,
      publishedAt: article.publishedAt,
    }));

    articles.forEach((newsItem:any) => sendNewNews(newsItem));

    res.json(articles);

  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news" });
  }
};
