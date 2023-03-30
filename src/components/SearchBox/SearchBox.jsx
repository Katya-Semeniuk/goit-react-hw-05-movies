import { Wrapper, Icon, Input } from './SearchBox.styled';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        minLength={2}
        debounceTimeout={500}
        type="text"
        value={value}
        placeholder="Search movies"
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  value: PropTypes.string,
};
