import { PAGE_NAMES } from '../router/path';
import { Heading, Link } from './Header.styled';

const Header = () => {
  return (
    <Heading>
      <nav>
        <Link to={PAGE_NAMES.homepage}>Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Heading>
  );
};

export default Header;
