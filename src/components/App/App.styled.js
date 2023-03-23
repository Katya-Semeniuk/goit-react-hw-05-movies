import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
        height: 100vh;
        display: 'flex';
        justify-content: 'center';
        align-items: 'center';
        font-size: 40;
        margin: 0 auto;
         padding: 16px 0;
        color: #010101;
        `;

export const Header = styled.header`
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
