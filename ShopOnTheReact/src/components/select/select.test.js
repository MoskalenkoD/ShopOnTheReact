import React from 'react';
import { shallow } from 'enzyme';
import ListOptions from '../../constants/list-options';
import Select from './select';
import SelectTag from './styles';

const wrapper = shallow(
    <Select listOptions={ListOptions}/>
);

it('clicked all icons on SearchBar', () => {

    wrapper.find(SelectTag).simulate('change',{target: { value : 'option1'}});
    expect(wrapper.find(SelectTag).props().value ==='option1');

});