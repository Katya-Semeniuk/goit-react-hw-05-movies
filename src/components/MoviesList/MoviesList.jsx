import { useLocation, generatePath } from 'react-router-dom';
import { Wrapper, Item, StyledLink } from './MoviesList.styled';
import { PAGE_NAMES } from '../router/path';
import PropTypes from 'prop-types';

const MoviesList = ({ filteredmovies }) => {
  const location = useLocation();

  return (
    <Wrapper>
      <ul>
        {filteredmovies.map(({ id, title }) => (
          <Item key={id}>
            <StyledLink
              to={generatePath(PAGE_NAMES.aboutMovie, { movieId: id })}
              state={{ from: location }}
            >
              {' '}
              {title}
            </StyledLink>
          </Item>
        ))}
      </ul>
    </Wrapper>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  trendMovies: PropTypes.arrayOf(PropTypes.shape()),
};
