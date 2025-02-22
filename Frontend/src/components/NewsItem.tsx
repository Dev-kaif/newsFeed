import React from "react";

interface NewsProps {
  title: string;
  content: string;
  url: string;
  image: string;
  source: string;
  publishedAt: string;
}

const NewsItem: React.FC<NewsProps> = ({ title, content, url, image, source, publishedAt }) => {
  return (
    <div className="news-item">
      <h2>{title}</h2>
      <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
      <p>{content}</p>
      <small>📰 {source} | ⏳ {new Date(publishedAt).toLocaleString()}</small>
      <br />
      <a href={url} target="_blank" rel="noopener noreferrer">
        🔗 Read more
      </a>
    </div>
  );
};

export default NewsItem;
