import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../../constants/colors';

const ListIconsButtons = styled.ul`
    float: left;
    margin: 0 ;
    padding-left: 0;
    padding-top: 5px;
    list-style: none;
`;

const ItemIcon = styled.li`
    float: left;
    color: ${Colors.separator};
`;

const ItemImage = styled.img`
    margin: 0 50%;
    transform: translate(-50%);
`;

const ItemText = styled.span`
    margin: 5px;
    display: block;
    text-transform: uppercase;
    font-size: ${props => (props.fontSize || 10)}px;
`;

const ItemLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.textLight};
    float:left;
`;

export {ListIconsButtons, ItemIcon, ItemImage, ItemText, ItemLink};