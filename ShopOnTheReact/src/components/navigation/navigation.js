import React from 'react';
import Arrow from '../../images/ArrowBig.png';
import {NavigationDiv, ShopButton, MenuTab, MenuLink, TextLink} from './styles';
import Select from '../select/select';
import ShopOptions from '../../constants/shop-options';
import NavigationLinks from '../../constants/navigation-links';
import {SelectStyles} from '../../constants/external-styles';

const Navigation = () => (
    <NavigationDiv>
        <ShopButton>
            <Select styles={SelectStyles} listOptions={ShopOptions}></Select>
            <img src={Arrow} alt=''></img>
        </ShopButton>
        <MenuTab>
            {NavigationLinks.map((itemLink, index) => {
                return (<MenuLink key={index} to={itemLink.url} activeClassName='active'>
                    <TextLink>{itemLink.text}</TextLink>
                </MenuLink>);
            })}
        </MenuTab>
    </NavigationDiv>
);

export default Navigation;