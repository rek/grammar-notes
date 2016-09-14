// import 'systemjs-hot-reloader/default-listener.js'

import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

// import TestPageReducer from './reducers/test';
import AppRouter from './router';
import NotificationReducer from '../notifications/reducers';
import AppReducer from './reducers';

var devTools = window.devToolsExtension ?
	window.devToolsExtension() :
	(f) => {
		console.log('What is f', f);
		return f
	}

let store = createStore(combineReducers({
    AppReducer,
    NotificationReducer,
    // TestPageReducer
}), {}, compose(applyMiddleware(thunkMiddleware), devTools));

ReactDOM.render((
    <AppRouter store={store}/>
), document.getElementById('app'));

console.log('Loading main app file - again');
