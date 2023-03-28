import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layuot from '../Layout/Layout';
import Cast from '../Cast/Cast';
import Review from '../Review/Review';
import { PAGE_NAMES } from '../router/path';
import { Container } from './App.styled';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));

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
