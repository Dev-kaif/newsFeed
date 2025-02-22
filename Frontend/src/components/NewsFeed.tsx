import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-feed">
      {news.length > 0 ? (
        news.map((item: any, index) => <NewsItem key={index} {...item} />)
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default NewsFeed;
