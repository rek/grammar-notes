import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Home from './home';
import ItemCreate from '../items/create';

export default class AppRouter extends React.Component {
    constructor() {
        super();

        this.routes = (
            <Route component={Home}>
                <Route path='\/item\/create' component={ItemCreate}></Route>
            </Route>
        );
    }

    componentWillMount() {
        this.forceUpdate(); // a little hack to help us re-render when this module is reloaded
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={browserHistory}>{this.routes}</Router>
            </Provider>
        );
    }
}

AppRouter.propTypes = {
    store: React.PropTypes.object
};
