import styled from "styled-components";
import Colors from '../../constants/colors';

const SelectTag = styled.select`
    color: ${props => props.styles && props.styles.color ? props.styles.color : '#000000'};
    background-color: ${props => props.styles && props.styles.backgroundColor ? props.styles.backgroundColor : Colors.textLight};
    margin-right: ${props => props.styles && props.styles.marginRight ? props.styles.marginRight : 0};
    text-transform: ${props => props.styles && props.styles.textTransform ? props.styles.textTransform : 'none'};
    font-size: ${props => props.styles && props.styles.fontSize ? props.styles.fontSize : 'larger'};
    font-weight: ${props => props.styles && props.styles.fontWeight ? props.styles.fontWeight : 'normal'};
    width: ${props => props.styles && props.styles.width ? props.styles.width : '170px'};
    border: none;
    outline: none;
    appearance: none;
`;

export default SelectTag;