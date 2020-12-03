import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './navigation';
import {MenuLink} from './styles';

const wrapper = shallow(
    <Navigation/>
);

it('clicked all tabs on menu', () => {
    expect(wrapper.find(MenuLink).length > 0);

    wrapper.find(MenuLink).forEach((node) => {
        const url = node.props().to;
        node.simulate('click');
        expect(node.hasClass('active'));
        expect(window.location.pathname === url);
    });
});
