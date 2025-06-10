import React, { useState, useEffect } from 'react';

export default function JokeFetcher() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Fetch error');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading joke...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Random Joke</h3>
      <p><strong>{joke.setup}</strong></p>
      <p>{joke.punchline}</p>
    </div>
  );
}
