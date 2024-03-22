import React from 'react';
import articles from './articles';
import ArticleCard from './ArticleCard'; 


const Body = () => {
  // Function to sort articles in descending order
  const sortArticlesDescending = (articles) => {
    const articlesArray = Object.values(articles); // Convert to array
    return articlesArray.sort((a, b) => b.id - a.id); 
  };

  return (
    <main>
      <div className="article-container">
        {sortArticlesDescending(articles).filter(article => !article.isdeleted).map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </main>
  );
};

export default Body;
