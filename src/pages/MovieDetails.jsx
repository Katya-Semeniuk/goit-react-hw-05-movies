import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard/MovieCard';
import { BackLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();

  const backLinkLocationsRef = useRef(
    location.state?.from ?? 'PAGE_NAMES.aboutMovie'
  );

  return (
    <div>
      <BackLink to={backLinkLocationsRef.current}>Go back</BackLink>
      <MovieCard />
    </div>
  );
};

export default MovieDetails;
