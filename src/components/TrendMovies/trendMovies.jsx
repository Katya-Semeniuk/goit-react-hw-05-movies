import { generatePath } from 'react-router-dom';
import { PAGE_NAMES } from '../router/path';
import { Container, Header, Item, StyledLink } from './trendMovies.styled';
import PropTypes from 'prop-types';

const TrendMovies = ({ trendMovies }) => {
  return (
    <Container>
      <Header>Trending today</Header>
      <ul>
        {trendMovies.map(({ id, title, name }) => {
          return (
            <Item key={id}>
              <StyledLink to={generatePath(PAGE_NAMES.aboutMovie, { id: id })}>
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
