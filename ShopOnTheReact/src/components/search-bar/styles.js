import styled from 'styled-components';
import Colors from '../../constants/colors';

const SearchBarDiv = styled.div`
    margin-top: 39px;
    display: inline-block;
    min-height: 70px;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 10px;
    background: #3a6b87; /* Old browsers */
    background: -moz-linear-gradient(-25deg, ${Colors.backgroundOne} 0%, ${Colors.backgroundOne} 52%, ${Colors.backgroundOne} 52%, ${Colors.backgroundTwo} 52%, ${Colors.backgroundTwo} 55%, ${Colors.backgroundThree} 55%, ${Colors.backgroundThree} 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-25deg, ${Colors.backgroundOne} 0%, ${Colors.backgroundOne} 52%, ${Colors.backgroundOne} 52%, ${Colors.backgroundTwo} 52%, ${Colors.backgroundTwo} 55%, ${Colors.backgroundThree} 55%, ${Colors.backgroundThree} 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(155deg, ${Colors.backgroundOne} 0%, ${Colors.backgroundOne} 52%, ${Colors.backgroundOne} 52%, ${Colors.backgroundTwo} 52%, ${Colors.backgroundTwo} 55%, ${Colors.backgroundThree} 55%, ${Colors.backgroundThree} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${Colors.backgroundOne}', endColorstr='#34454e',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

const LogoLink = styled.a`
    margin-left: 115px;
    float: left;
    width: 160px;
    margin-top: -5px;
`;

const Image = styled.img`
    width: 160px;
`;

const SearchDiv = styled.div`
    float: left;
    margin-left: 40px;
    background-color: ${Colors.textLight};
    height: 22px;
    padding: 11px
    position: relative
    width: calc(100% - 430px);
    min-width: 450px;
    max-width: 670px;
    margin-bottom: 20px;
`;

const Span = styled.span`
    margin: 0 20px;
`;

const Input = styled.input`
    background-color: ${Colors.textLight};
    border: none;    
    &:focus {
        outline: none;
    }
`;

const ButtonSearch = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    border: none;
    background-color: ${Colors.searchButton};
`;

const BlockForButtons = styled.div`
    float: right;
    margin: 0 95px 0 0 ;
    padding-left: 0;
    padding-top: 5px;
`;

const BasketIcon = styled.div`
    float: left;
    color: ${Colors.separator};
    background-color: ${Colors.basketButton};
    width: 66px;
    border-radius: 5px;
    margin-left: 10px;
`;

const BasketLink = styled.a`
    text-decoration: none;
    color: ${Colors.textLight};
    height: 44px;
    width:60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BasketImage = styled.img`
    margin: 0 50%;
    transform: translate(-50%);
    margin: 0;
    transform: none;
`;

const BasketText = styled.span`
    margin: 5px;
    display: block;
    text-transform: uppercase;
    font-size: 10px;
    font-size: 15px;
`;

export {SearchBarDiv, LogoLink, Image, SearchDiv, Span, Input, ButtonSearch, BlockForButtons, BasketIcon, BasketLink, BasketImage, BasketText};