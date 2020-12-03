import styled from 'styled-components';
import Slider from 'react-slick';
import {NavLink} from 'react-router-dom';
import Colors from '../../constants/colors';

const TextHeader = styled.h2`
    display: contents;
    font-weight: normal;
`;

const SliderBlock = styled(Slider)`
    border-top: 4px solid ${Colors.borderSlider};
    padding: 20px 0;
    background-color: ${Colors.backgroundSlider};
`;

const ItemBlock = styled(NavLink)`
    padding: 0 20px;
    display: table-cell !important;
    text-decoration: none;
    outline: none;
`;

const ItemImage = styled.img`
    object-fit: contain;
    width: 100%;
    height: 150px;
`;

const ArrowButton = styled.div`
    top: 120px;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    left: ${props => props.styles.left ? props.styles.left : 'auto'};
    right: ${props => props.styles.right ? props.styles.right : 'auto'};
    border-right: ${props => props.styles.borderRight ? props.styles.borderRight : 'none'};
    border-left: ${props => props.styles.borderLeft ? props.styles.borderLeft : 'none'};
`;

const ButtonImage = styled.img`
    position: absolute;
    top: -11px;
    left: ${props => props.styles.left ? props.styles.left : 'auto'};
    right: ${props => props.styles.right ? props.styles.right : 'auto'};
    transform: ${props => props.styles.transform ? props.styles.transform : 'none'};
`;

const InfoText = styled.h3`
    font-weight: 500;
    text-align: center;
    margin: 5px 0 0;
    font-size: 14px;
    color: ${Colors.textDark};
`;

const DiscountText = styled(InfoText)`
    font-weight: 400;
`;

const PriceText = styled(InfoText)`
    color: ${Colors.border};
    font-size: 20px;
`;


export {TextHeader, SliderBlock, ItemBlock, ItemImage, ArrowButton, ButtonImage, InfoText, DiscountText, PriceText};