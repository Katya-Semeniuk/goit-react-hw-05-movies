import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
text-align: center;
`;

export const Title = styled.p`
font-size: 30px;
`;

export const Reference = styled(Link)`
text-decoration: none;
font-size: 20px;
 &.hover {
    color: rgb(181 11 158);
  }

`;