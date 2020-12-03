import React from 'react';
import { shallow } from 'enzyme';
import ListIcons from './list-icons';
import {ItemLink} from "./styles";
import ListIconsValues from "../../constants/list-icons-values";

const wrapper = shallow(
    <ListIcons listIcons={ListIconsValues}/>
);

it('clicked all icons on SearchBar', () => {
    expect(wrapper.find(ItemLink).length > 0);

    wrapper.find(ItemLink).forEach((node) => {
        const url = node.props().to;
        node.simulate('click');
        expect(window.location.pathname === url);
    });
});