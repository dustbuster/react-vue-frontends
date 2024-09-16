// app/articles/page.jsx
'use client';  // This makes the component a Client Component

import { useEffect, useState } from 'react';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://test_app.testdev/api/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error loading articles: {error}</p>;
  }

  return (
    <div className="bg-blue-500 text-white">
      <div>
        <h1>Articles</h1>
      </div>
      <div>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
