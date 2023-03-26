import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
padding: 10px;
max-height: 120px;
`;
Container.displayName = 'Container';

export const Title = styled.h2`
font-size: 20px;
margin: 0px;
`;
Title.displayName = 'Title';

export const Subtitle = styled.h3`
font-size: 15px;
margin: 0px;
padding-left: 5px;
color: #473c3c;
`;
Subtitle.displayName = 'Subtitle';

export const Overwiew = styled.p`
margin: 7px 0px;
`;
Overwiew.displayName = 'Overwiew';

export const List = styled.ul`
display: flex;
margin: 7px 0px;
padding-left: 5px;
list-style: none;
`;
List.displayName = 'List';

export const Item =styled.li`
margin-right: 5px;
`;
Item.displayName = 'Item';

export const Paragraph = styled.p`
font-size: 15px;
margin: 7px 0px;
`;
Paragraph.displayName = 'Paragraph';

export const Section= styled.div`
padding: 25px 5px 10px 5px;
`;
Section.displayName = 'Section';

export const Caption= styled.h4`
margin: 0px;
`;
Caption.displayName = 'Caption';

export const AddInfoList = styled.ul`
display: flex;
margin-top: 0px;
margin-bottom: 0px;
padding-left: 5px;
list-style: none;
`;
AddInfoList.displayName = 'AddInfoList';

export const InfoItem = styled.li`
padding: 7px;
`;
InfoItem.displayName = 'InfoItem';

export const StyledLink = styled(Link)`
text-decoration: none;
color: black;
cursor: pointer;
&:hover{
    color: rgb(181 11 158);
}
`;
StyledLink.displayName = 'StyledLink';
