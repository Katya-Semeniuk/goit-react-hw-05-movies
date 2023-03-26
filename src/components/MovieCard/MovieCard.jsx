import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchMovieById } from '../../api/API';
import Loader from '../Loader/Loader';
import {
  Container,
  Title,
  Subtitle,
  Overwiew,
  List,
  Item,
  Paragraph,
} from './MovieCard.styled';

const MovieCard = () => {
  const { id } = useParams();
  // debugger;
  const [movieInfo, setmovieInfo] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus('pending');

    fetchMovieById(id)
      .then(({ data }) => {
        setmovieInfo(data);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error.message);
        setStatus('error');
      });
  }, [id]);

  if (status === 'error') {
    return <>Something was wrong</>;
  }

  const {
    title,
    genres,
    overview,
    vote_average,
    release_date,
    belongs_to_collection,
    // backdrop_path,
    poster_path,
  } = movieInfo;

  const date = new Date(release_date);
  const year = date.getFullYear();

  return (
    <Container>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <div>
          <img src={poster_path} alt="poster" />
          <Title>
            {title === null ? belongs_to_collection.name : title} ({year})
          </Title>
          <Paragraph>User Score: {Math.round(vote_average)}</Paragraph>
          <Subtitle>Overwiew</Subtitle>
          <Overwiew>{overview}</Overwiew>
          <Subtitle>Genres</Subtitle>
          <List>
            {genres.map(({ id, name }) => {
              return <Item key={id}>{name}</Item>;
            })}
          </List>
        </div>
      )}
      <div>
        <Link to="">Cast</Link>
        <Link to="">Review</Link>
      </div>
    </Container>
  );
};

export default MovieCard;
