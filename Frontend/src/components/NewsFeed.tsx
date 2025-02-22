import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/config";

// Define the News type
interface News {
  title: string;
  content: string;
  url: string;
  image: string;
  source: string;
  publishedAt: string;
}

const socket = io(`${BACKEND_URL}`);

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/news`);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();

    socket.on("newNews", (newArticle: News) => {
      setNews((prevNews) => [newArticle, ...prevNews]);
    });

    return () => {
      socket.off("newNews");
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-gray-200 flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full bg-[#0d1b3b] py-4 px-8 shadow-md flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <h1 className="text-2xl font-bold text-white">NewsFeed</h1>
        <div className="flex items-center space-x-6">
          <span className="text-sm text-red-600 animate-pulse">Live Updates</span>
          <button
            onClick={handleLogout}
            className="px-2 py-1 text-sm bg-blue-900 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="w-full max-w-4xl space-y-6 mt-20 p-8">
        {news.length > 0 ? (
          news.map((item, index) => (
            <div
              key={index}
              className="bg-[#0d1b3b] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold text-gray-100">{item.title}</h2>
              <p className="text-blue-400 text-sm mt-1">
                {item.source} - {new Date(item.publishedAt).toLocaleString()}
              </p>
              <div className="w-full h-56 mt-4 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">{item.content}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 ease-in-out"
              >
                Read More
              </a>
            </div>
          ))
        ) : (
          <p className="text-blue-400 text-lg animate-pulse">Fetching latest news...</p>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
