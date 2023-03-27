import { Wrapper, Icon, Input } from './SearchBox.styled';

const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
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
