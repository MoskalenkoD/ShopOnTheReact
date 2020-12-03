import React from 'react';
import {StarsFirstLevel, StarsSecondLevel} from './styles';

const RateInStars = ({value}) => (
    <StarsFirstLevel>
        <StarsSecondLevel value={value}></StarsSecondLevel>
    </StarsFirstLevel>
);

export default RateInStars;