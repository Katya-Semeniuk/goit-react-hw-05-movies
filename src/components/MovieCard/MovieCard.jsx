import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { fetchMovieById } from '../../api/API';
import Loader from '../Loader/Loader';
import {
  Container,
  Wrap,
  Image,
  WrapInfo,
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
        setmovieInfo(data);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error.message);
        setStatus('error');
      });
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
    poster_path,
  } = movieInfo;

  console.log(poster_path);

  const date = new Date(release_date);
  const year = date.getFullYear();

  return (
    <Container>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <Wrap>
          <Image
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt="poster"
          />
          <WrapInfo>
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
          </WrapInfo>
        </Wrap>
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
      <Suspense fallback={<div>LOADING</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieCard;
