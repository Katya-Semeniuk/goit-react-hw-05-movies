import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../api/API';
import Loader from '../components/Loader/Loader';
import TrendMovies from 'components/TrendMovies/trendMovies';

const Home = () => {
  const [trendMovies, settrendMovies] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus('pending');
    fetchTrendMovies().then(({ data }) => {
      const arrayOfMovies = data.results;
      // console.log(arrayOfMovies);
      // console.log('trendMovies');
      settrendMovies(prevState => [...prevState, ...arrayOfMovies]);
      setStatus('resolved');
    });
  }, []);

  return (
    <main>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && trendMovies.length > 0 && (
        <TrendMovies trendMovies={trendMovies}></TrendMovies>
      )}
    </main>
  );
};

export default Home;
