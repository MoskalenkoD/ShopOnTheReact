import styled from 'styled-components';

const StarsFirstLevel = styled.div`
    margin: 0 auto
    width: 68px;
    height: 23px;
    background: url(/images/GreyStars.png) 0 0 no-repeat;
`;

const StarsSecondLevel = styled.div`
    width: ${props => (props.value + '%')};
    height: 23px;
    background: url(/images/GoldStars.png) 0 0 no-repeat;
`;

export { StarsFirstLevel, StarsSecondLevel};
