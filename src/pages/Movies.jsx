import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api/API';
import SearchBox from '../components/SearchBox/SearchBox';
import MoviesList from '../components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  console.log(movieName);

  const [moviesList, setmoviesList] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (movieName === '') return;

    setStatus('pending');

    searchMovies(movieName)
      .then(({ data }) => {
        // console.log(data);
        setmoviesList(data.results);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error.message);
        setStatus('error');
      });
  }, [movieName]);

  const updateQueryString = name => {
    console.log('updateQueryString');
    if (name === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: name });
    // const nextParams = query !== '' ? { query } : {};
  };

  const visibleMovies = moviesList.filter(movie =>
    movie.title.toLowerCase().includes(movieName.toLowerCase())
  );
  console.log(visibleMovies);
  if (status === 'error') {
    return <>Something was wrong</>;
  }

  return (
    <div>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <MoviesList filteredmovies={visibleMovies} />
    </div>
  );
};

export default Movies;

// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { searchMovies } from '../api/API';
// import SearchBox from '../components/SearchBox/SearchBox';
// import MoviesList from '../components/MoviesList/MoviesList';

// const Movies = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get('movies') ?? '';
//   console.log(movieName);

//   const [moviesList, setmoviesList] = useState([]);
//   // const [page, setPage] = useState(1);
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     if (movieName === '') return;

//     setStatus('pending');

//     searchMovies(movieName)
//       .then(({ data }) => {
//         console.log(data);
//         setmoviesList(data);
//         setStatus('resolved');
//       })
//       .catch(error => {
//         console.log(error.message);
//         setStatus('error');
//       });
//   }, [movieName]);

//   const updateQueryString = name => {
//     console.log('updateQueryString');
//     const nextParams = name !== '' ? { name } : {};
//     setSearchParams(nextParams);
//   };

//   // const visibleMovies = moviesList.filter(product =>
//   //   product.name.toLowerCase().includes(movieName.toLowerCase())
//   // );

//   if (status === 'error') {
//     return <>Something was wrong</>;
//   }

//   return (
//     <div>
//       <SearchBox value={movieName} onChange={updateQueryString} />
//       <input value={movieName} onChange={updateQueryString} />
//       <MoviesList />
//     </div>
//   );
// };

// export default Movies;
