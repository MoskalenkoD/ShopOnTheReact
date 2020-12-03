// eslint-disable-next-line no-unused-vars
import React from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from '../../actions/index';
import Request from '../../actions/serviceAjaxRequest';
// eslint-disable-next-line no-unused-vars
import {DiscountText, InfoText, ItemBlock, ItemImage, PriceText} from "./styles";
import RateInStars from "../rate/rate";

function getTypePath(type) {
    switch (type) {
        case 1: {
            return 'Phone';
        }
        case 2: {
            return 'Laptop';
        }
        case 3: {
            return 'Tablet';
        }
        default: {
            return 'Notfound';
        }
    }
}

const Device = (props) => {
    const Id = props.match.params.id;
    let {resultRequest} = props;
    // eslint-disable-next-line no-undef
    const UrlForData = process.env.REACT_APP_API_MOBILE_DEVICES +'/' + Id;

    if(resultRequest.status !== false) {
        Request('FIND_DEVICE', UrlForData, props.dispatch);
    }

    let optionsDevice = resultRequest.listDevices.length > 0 ?  resultRequest.listDevices[0]: {};

    let nameImage = getTypePath(optionsDevice.type);

    return (
        <div>
            {/* eslint-disable-next-line no-undef */}
            <ItemImage src={'/images/devices/' + nameImage.toLocaleLowerCase() + '.png'} alt={optionsDevice.name}></ItemImage>
            <InfoText>{optionsDevice.name}</InfoText>
            <InfoText>Class 6</InfoText>
            <InfoText>{nameImage || ''}</InfoText>
            <RateInStars value={optionsDevice.rate}></RateInStars>
            <DiscountText><span style={{textDecoration: 'line-through'}}>Rs 499</span>[{optionsDevice.discount}%
                OFF]</DiscountText>
            <PriceText>Rs 350</PriceText>
        </div>
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps.onRequestData
)(Device);