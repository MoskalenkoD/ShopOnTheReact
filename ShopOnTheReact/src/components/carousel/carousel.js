import React from 'react';
import {
    TextHeader,
    SliderBlock,
    ItemBlock,
    ItemImage,
    ArrowButton,
    ButtonImage,
    InfoText,
    DiscountText,
    PriceText
} from "./styles";
import RateInStars from '../rate/rate';
import {
    PrevButtonStyles,
    NextButtonStyles,
    PrevButtonImageStyles,
    NextButtonImageStyles
} from '../../constants/external-styles';

function SampleArrow({onClick, buttonStyles, imageStyles}) {
    return (
        <ArrowButton styles={buttonStyles} onClick={onClick}>
            <ButtonImage styles={imageStyles} src='/images/Arrow.png'></ButtonImage>
        </ArrowButton>
    );
}

function getImagePath(type) {
    switch (type) {
        case 1: {
            return 'phone.png';
        }
        case 2: {
            return 'laptop.png';
        }
        case 3: {
            return 'tablet.png';
        }
        default: {
            return 'notfound.png';
        }
    }
}

const Settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <SampleArrow buttonStyles={PrevButtonStyles} imageStyles={PrevButtonImageStyles}/>,
    prevArrow: <SampleArrow buttonStyles={NextButtonStyles} imageStyles={NextButtonImageStyles}/>
};

const Carousel = ({text, data}) => {
    const Url = window.location.pathname;

    return (
        <>
            <TextHeader>{text}</TextHeader>
            <SliderBlock {...Settings}>
                {data.map((item, index) => {
                    let nameImage = getImagePath(item.type);

                    return (
                        <ItemBlock key={index} to={Url + `/` + item.id}>
                            <ItemImage src={'/images/devices/' + nameImage} alt={item.name}></ItemImage>
                            <InfoText>{item.name}</InfoText>
                            <InfoText>Class 6</InfoText>
                            <RateInStars value={item.rate}></RateInStars>
                            <DiscountText><span style={{textDecoration: 'line-through'}}>Rs 499</span>[{item.discount}%
                                OFF]</DiscountText>
                            <PriceText>Rs 350</PriceText>
                        </ItemBlock>);
                })}
            </SliderBlock>
        </>
    )
};

export default Carousel

