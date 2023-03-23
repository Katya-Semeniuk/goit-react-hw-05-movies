import { PAGE_NAMES } from '../components/router/path';
import { Container, Title, Reference } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <Title> 404 page not found</Title>
      <Reference to={PAGE_NAMES.homepage}>Back to Homepage</Reference>
    </Container>
  );
};

export default NotFound;
