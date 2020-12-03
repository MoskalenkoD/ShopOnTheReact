import React from 'react';

import {Route, Switch} from 'react-router-dom';
import Header from './header/header';
import FashionStore from './fashion-store/fashion-store';
import BooksAndMedia from './books-and-media/books-and-media';
import ClearanceSale from './clearance-sale/clearance_sale';
import MobilePhones from './mobile-phones/mobile-phones';
import Device from "./device/device";

const App = () => (
    <>
        <Header/>
        <Switch>
            <Route
                path='/fashion_store'
                component={FashionStore}
            />
            <Route
                path='/books_media'
                component={BooksAndMedia}
            />
            <Route
                path='/clearance_sale'
                component={ClearanceSale}
            />
            <Route
                exact
                path='/mobile_phones'
                component={MobilePhones}
            />
            <Route
                path='/mobile_phones/:id'
                component={Device}
            />
        </Switch>
    </>
);

export default App;