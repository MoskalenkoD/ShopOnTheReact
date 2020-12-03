import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './styles/index.sass';
import App from './components/App';
import MyAccount from './components/my-account/my-account';
import TrackOrder from './components/track-order/track-order';
import SupportLink from './components/support-link/support-link';
import Store from './actions/store';

ReactDOM.render(
    <Provider store={Store}>
        <SupportLink/>
        <Router>
            <Switch>
                <Route exact path='/my_account' component={MyAccount}/>
                <Route exact path='/track_order' component={TrackOrder}/>
                <Route path='/' component={App}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

