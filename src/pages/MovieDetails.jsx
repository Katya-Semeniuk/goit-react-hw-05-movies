import MovieCard from '../components/MovieCard/MovieCard';
import { PAGE_NAMES } from '../components/router/path';
import { BackLink } from './MovieDetails.styled';
const MovieDetails = () => {
  return (
    <div>
      <BackLink to={PAGE_NAMES.homepage}>Go back</BackLink>
      <MovieCard />
    </div>
  );
};

export default MovieDetails;
