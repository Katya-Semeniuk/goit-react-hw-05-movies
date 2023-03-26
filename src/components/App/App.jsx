import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Layuot from '../Layout/Layout';
import Movies from '../../pages/Movies';
import NotFound from '../../pages/NotFound';
import MovieDetails from '../../pages/MovieDetails';
import { PAGE_NAMES } from '../router/path';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<Layuot />}>
          <Route index element={<Home />} />
          <Route path={PAGE_NAMES.movies} element={<Movies />} />
          <Route path={PAGE_NAMES.aboutMovie} element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};

// KEY  991596626fb93000a24867e82c352474

// API    https://api.themoviedb.org/3/movie/550?api_key=991596626fb93000a24867e82c352474
