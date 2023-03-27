import { useLocation } from 'react-router-dom';
import { Wrapper } from './MoviesList.styled';

const MoviesList = ({ filteredmovies }) => {
  const location = useLocation();
  return (
    <Wrapper>
      <ul>
        {filteredmovies.map(({ id, title }) => (
          <div key={id}>
            <h3>{title}</h3>
          </div>
        ))}
        <p>MoviesList</p>
      </ul>
    </Wrapper>
  );
};

export default MoviesList;
