import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-content"> {/* Wrap content for layout */}
        <h2><Link to={article.url}>{article.heading}</Link></h2>  
        <p>{article.description}</p>
      </div>
      <img src={article.image} alt={article.heading} /> 
    </div>
  );
};

export default ArticleCard;
