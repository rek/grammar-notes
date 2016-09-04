import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import ItemComponents from '../items/components';

export default class AppRouter extends React.Component {
    constructor() {
        super();
            // <Route path="test" component={TestPage}/>
        this.routes = (
            <Route path="/" component={ItemComponents}>
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
