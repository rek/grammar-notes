import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './App';
import NotificationReducer from './notifications/reducers';

let devTools = window.devToolsExtension ?
	window.devToolsExtension() :
	(f) => {
		console.log('What is f', f);
		return f
	}

let store = createStore(combineReducers({
    // AppReducer,
    NotificationReducer,
    // ItemsReducer
}),
// default state:
{},
//
compose(applyMiddleware(thunkMiddleware), devTools));

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
