import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const ArticleCard = ({ article }) => {

  

  return (
    <div className="article-card ratio-container">
      <h2><Link to={article.url}>{article.heading}</Link></h2>  
      <div className="article-content"> 
        <img src={require(`${article.image}`)} alt={article.heading} /> 
        <p>{article.description}</p>
      </div>
      
    </div>
  );
};

export default ArticleCard;



