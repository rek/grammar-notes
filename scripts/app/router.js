import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Layout from './layout';
import Home from './home';

import ItemList from '../items/components/list';
import ItemCreate from '../items/components/create';
import ItemEdit from '../items/components/edit';
import ItemShow from '../items/components/show';

const setHome = (nextState, replace) => {
	replace({pathname: '/admin/items'})
}

// const requireAuth = (nextState, replace) => {
// 	if (true) {
// 	// if (!auth.isAdmin()) {
// 	// }
// 		// Redirect to Home page if not an Admin
// 		replace({pathname: '/'})
// 	}
// }

export default class AppRouter extends React.Component {
	constructor() {
		super();

				// <Route path='/items/:id' component={ItemShow}></Route>
		this.routes = (
			<Route path='/' component={Layout}>
				<IndexRoute component={Home} onEnter={setHome}/>
				{/*
				*/}
				<Route path='/items/:itemId' component={ItemShow} />
				<Route path='/admin/items' component={ItemList} />
				<Route path='/admin/items/create' component={ItemCreate} />
				<Route path='/admin/items/:itemId' component={ItemEdit} />
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
