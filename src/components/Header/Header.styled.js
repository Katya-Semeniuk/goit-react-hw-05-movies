import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Heading = styled.header`
 padding: 8px 0;
  margin-bottom: 16px;
border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: rgb(181 11 158);
  }
`;