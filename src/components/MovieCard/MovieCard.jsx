import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
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
  Section,
  Caption,
  AddInfoList,
  InfoItem,
  StyledLink,
} from './MovieCard.styled';

const MovieCard = () => {
  const { movieId } = useParams();
  // debugger;
  const [movieInfo, setmovieInfo] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setStatus('pending');

    fetchMovieById(movieId)
      .then(({ data }) => {
        // console.log(data);
        setmovieInfo(data);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error.message);
        setStatus('error');
      });
    // return () => {
    //   console.log('вихід з функції');
    // };
  }, [movieId]);

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

      <Section>
        <Caption>Additional information</Caption>
        <AddInfoList>
          <InfoItem>
            <StyledLink to="cast" replace>
              Cast
            </StyledLink>
          </InfoItem>
          <InfoItem>
            <StyledLink to="reviews" replace>
              Review
            </StyledLink>
          </InfoItem>
        </AddInfoList>
      </Section>
      <Outlet />
    </Container>
  );
};

export default MovieCard;
