import React from 'react';
import SelectTag from './styles';

const Select = (props) => {
    const {styles, listOptions} = props;

    return (
        <SelectTag styles={styles}>
            {listOptions.map((itemOption, index) => {
                return (<option key={index} value={itemOption.value}>{itemOption.text}</option>);
            })}
        </SelectTag>);
};

export default Select;