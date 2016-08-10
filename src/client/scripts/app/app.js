import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AppReducer from './reducers/reducers';
import TestPageReducer from './reducers/test';
import AppRouter from './components/router';

var devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

let store = createStore(combineReducers({
    AppReducer, TestPageReducer
}), {}, compose(applyMiddleware(thunkMiddleware), devTools));

ReactDOM.render((
    <AppRouter store={store}/>
), document.getElementById('app'));
