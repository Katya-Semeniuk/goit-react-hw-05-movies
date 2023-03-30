import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { DebounceInput } from 'react-debounce-input';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  padding: 10px;
  text-transform: uppercase;
`;
Wrapper.displayName = 'Wrapper';

export const Input = styled(DebounceInput)`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;
Input.displayName = 'Input';

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 16px;
`;
Icon.displayName = 'Icon';