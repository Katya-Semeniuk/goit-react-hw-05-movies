import { useLocation } from 'react-router-dom';
import { generatePath } from 'react-router-dom';
import { PAGE_NAMES } from '../router/path';
import { Container, Header, Item, StyledLink } from './trendMovies.styled';
import PropTypes from 'prop-types';

const TrendMovies = ({ trendMovies }) => {
  const location = useLocation();

  return (
    <Container>
      <Header>Trending today</Header>
      <ul>
        {trendMovies.map(({ id, title, name }) => {
          return (
            <Item key={id}>
              <StyledLink
                to={generatePath(PAGE_NAMES.aboutMovie, { movieId: id })}
                state={{ from: location }}
              >
                {title ? title : name}
              </StyledLink>
            </Item>
          );
        })}
      </ul>
    </Container>
  );
};

export default TrendMovies;

TrendMovies.propTypes = {
  trendMovies: PropTypes.arrayOf(PropTypes.shape()),
};

TrendMovies.propTypes = {
  trendMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
