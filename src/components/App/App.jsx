import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Layuot from '../Layout/Layout';
import Movies from '../../pages/Movies';
import NotFound from '../../pages/NotFound';
import MovieDetails from '../../pages/MovieDetails';
import Cast from '../Cast/Cast';
import Review from '../Review/Review';
import { PAGE_NAMES } from '../router/path';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<Layuot />}>
          <Route index element={<Home />} />
          <Route path={PAGE_NAMES.aboutMovie} element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path={PAGE_NAMES.movies} element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};
