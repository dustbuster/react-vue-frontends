// app/articles/page.jsx
'use client';  // This makes the component a Client Component

import { useEffect, useState } from 'react';

export default function ComponentName() {

  const [items, setStuff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStuff = async () => {
      try {
        const response = await fetch('https://url.com/api/items');
        if (!response.ok) {
          throw new Error('Failed to fetch Stuff');
        }
        const data = await response.json();
        setStuff(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStuff();
  }, []);

  if (loading) {
    return <p>Loading items...</p>;
  }

  if (error) {
    return <p>Error loading items: {error}</p>;
  }

  return (
    <div className="bg-blue-500 text-white">
      <div>
        <h1>Items</h1>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
