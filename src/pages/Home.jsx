import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../api/API';

const Home = () => {
  const [trendMovies, settrendMovies] = useState([]);
  useEffect(() => {
    fetchTrendMovies().then(({ data }) => {
      const arrayOfMovies = data.results;
      console.log(arrayOfMovies);
      settrendMovies(prevState => [...prevState, ...arrayOfMovies]);
    });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <div></div>
    </main>
  );
};

export default Home;
