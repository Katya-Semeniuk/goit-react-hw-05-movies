import { RotatingLines } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <RotatingLines
        strokeColor="rgb(181 11 158)"
        strokeWidth="5"
        animationDuration="1.15"
        width="56"
        visible={true}
      />
    </Container>
  );
};

export default Loader;
