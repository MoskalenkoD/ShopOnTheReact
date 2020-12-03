import React from 'react';
import SwipeToSlide from '../carousel/carousel';
import {BlockInformation} from './styles';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from '../../actions';
import Request from '../../actions/serviceAjaxRequest';

const MobilePhones = ({dispatch, resultRequest}) => {
    const UrlForData = process.env.REACT_APP_API_MOBILE_DEVICES;
    const SliderText = 'Mobile Phones';

    if (resultRequest.status !== true) {
        Request('ALL_DEVICES', UrlForData, dispatch);
    }

    return (
        <BlockInformation>
            <SwipeToSlide text={SliderText} data={resultRequest.listDevices}></SwipeToSlide>
        </BlockInformation>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps.onRequestData
)(MobilePhones);