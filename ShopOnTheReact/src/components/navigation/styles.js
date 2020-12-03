import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Colors from '../../constants/colors';

const NavigationDiv = styled.div`
    background-color: ${Colors.backgroundNavigation};
    width: 100% ;
    margin-top: -3px;
    padding: 8px 0 0 0;
    border-top: 1px solid ${Colors.background};
    display: flex;
`;

const ShopButton = styled.a`
    text-decoration: none;
    color: ${Colors.textLight};
    height: 44px;
    width:185px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.shopButton};
    border-radius: 5px;
    margin-left: 115px
    float:left;
    margin-bottom: 8px;
    cursor: pointer;
`;

const MenuTab = styled.ul`
    list-style: none;
    float:left;
    margin: 0 0 0 45px;
    padding: 0;
`;

const MenuLink = styled(NavLink)`
    float: left;
    margin: 0 10px;
    text-decoration: none;
    
    &:hover {
        border-bottom: 8px solid ${Colors.activeButton}; 
    }
    
    &.active {
        border-bottom: 8px solid ${Colors.activeButton};
    }
`;

const TextLink = styled.span`
    text-decoration: none;
    color: ${Colors.textLight};
    font-size: 18px;
    height: 34px;
    display: block;
    margin: 0 20px;
    text-align: center;
    padding-top: 10px;
`;

export { NavigationDiv, ShopButton, MenuTab, MenuLink, TextLink};