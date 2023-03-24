import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './MovieCard.styled';

const MovieCard = () => {
  const { id } = useParams();
  // debugger;

  useEffect(() => {
    return console.log('MovieCard - useEffect');
  }, [id]);

  return (
    <Container>
      <h2>Information about selectsd movie</h2>
    </Container>
  );
};

export default MovieCard;
