import React, { useState, useEffect } from 'react';

const JokeGenerator = () => {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load initial joke on component mount
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <section className="task-container center-content">
      <h2>Random Joke Generator</h2>
      <div className="joke-box card">
        {loading ? (
          <p className="loading">Fetching a good one...</p>
        ) : (
          <>
            <p className="joke-setup">{joke.setup}</p>
            <p className="joke-punchline">{joke.punchline}</p>
          </>
        )}
      </div>
      <button className="btn-primary" onClick={fetchJoke} disabled={loading}>
        {loading ? 'Loading...' : 'Next Joke'}
      </button>
    </section>
  );
};

export default JokeGenerator;
