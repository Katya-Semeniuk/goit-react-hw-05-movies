import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import NotFound from '../../pages/NotFound';
import MovieDetails from '../../pages/MovieDetails';
import { PAGE_NAMES } from '../router/path';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to={PAGE_NAMES.homepage}>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<Home />} />
        <Route path={PAGE_NAMES.movies} element={<Movies />} />
        <Route path={PAGE_NAMES.aboutMovie} element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <div>Contact us</div>
      </footer>
    </Container>
  );
};

// KEY  991596626fb93000a24867e82c352474

// API    https://api.themoviedb.org/3/movie/550?api_key=991596626fb93000a24867e82c352474
