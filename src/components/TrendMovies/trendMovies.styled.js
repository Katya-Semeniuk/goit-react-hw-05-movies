import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
padding: 10px;
`;

export const Header = styled.h1`
font-size: 25px`;

export const Item = styled.li`
margin-bottom: 5px;

&:last-child {
    margin-bottom: 0px; 
}`;

export const StyledLink = styled(Link)`
color: black;
&:hover{
    color: rgb(181 11 158);
}
`;