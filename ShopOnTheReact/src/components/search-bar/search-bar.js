import React from 'react';
import Logo from '../../images/Logo.png';
import Search from '../../images/Search.png';
import Basket from '../../images/Basket.png';
import Arrow from '../../images/Arrow.png';
import Select from '../select/select';
import ListIcons from '../list-icons/list-icons';
import {
    SearchBarDiv,
    LogoLink,
    Image,
    SearchDiv,
    Span,
    Input,
    ButtonSearch,
    BlockForButtons,
    BasketIcon,
    BasketLink,
    BasketImage,
    BasketText
} from './styles'
import ListIconsValues from '../../constants/list-icons-values';
import ListOptions from '../../constants/list-options';

const SearchBar = () => (
    <SearchBarDiv>
        <LogoLink href='#'>
            <Image src={Logo} alt='MOCart'></Image>
        </LogoLink>
        <SearchDiv>
            <Select listOptions={ListOptions}></Select>
            <Span>|</Span>
            <Input type='text' placeholder='Search andre store here...'/>
            <ButtonSearch>
                <img src={Search} alt='Search'></img>
            </ButtonSearch>
        </SearchDiv>
        <BlockForButtons>
            <ListIcons listIcons={ListIconsValues}></ListIcons>
            <BasketIcon>
                <BasketLink href='#'>
                    <BasketImage src={Basket} alt='Basket'></BasketImage>
                    <BasketText>0</BasketText>
                    <BasketImage src={Arrow} alt='Arrow'></BasketImage>
                </BasketLink>
            </BasketIcon>
        </BlockForButtons>
    </SearchBarDiv>
);

export default SearchBar;