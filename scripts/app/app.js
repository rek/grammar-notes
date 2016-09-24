import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

// import TestPageReducer from './reducers/test';
import AppRouter from './router';

import AppReducer from './reducers';
import ItemsReducer from '../items/reducers';
import NotificationReducer from '../notifications/reducers';

var devTools = window.devToolsExtension ?
	window.devToolsExtension() :
	(f) => {
		console.log('What is f', f);
		return f
	}

let store = createStore(combineReducers({
    AppReducer,
    NotificationReducer,
    ItemsReducer
}),
// default state:
{},
//
compose(applyMiddleware(thunkMiddleware), devTools));

ReactDOM.render((
    <AppRouter store={store}/>
), document.getElementById('app'));

console.log('Loading main app file');
