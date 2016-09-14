import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Layout from './layout';
import Home from './home';
import Items from '../items/list';
import ItemCreate from '../items/create';
import ItemEdit from '../items/edit';

const requireAuth = (nextState, replace) => {
	if (true) {
	// if (!auth.isAdmin()) {
		// Redirect to Home page if not an Admin
		replace({pathname: '/'})
	}
}

export default class AppRouter extends React.Component {
	constructor() {
		super();

				// <Route path='/items/:id' component={ItemShow}></Route>
		this.routes = (
			<Route component={Layout}>
				<Route path='/' component={Home} />
				<Route path='/admin' component={Items} onEnter={requireAuth} />
				<Route path='/items' component={Items} />
				<Route path='/items/create' component={ItemCreate} />
				<Route path='/items/:itemId' component={ItemEdit} item='a' />
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

// AppRouter.propTypes = {
// 	store: React.PropTypes.object
// };
