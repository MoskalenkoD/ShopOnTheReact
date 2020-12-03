import React from 'react';
import SearchBar from '../search-bar/search-bar';
import Navigation from '../navigation/navigation';
import TextBaner from '../text-baner/text-baner';

const Header = () => (
    <>
        <SearchBar/>
        <Navigation/>
        <TextBaner/>
    </>
);

export default Header;