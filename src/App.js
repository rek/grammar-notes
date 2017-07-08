import React, { Component } from "react";
import {connect} from 'react-redux'
import {Provider} from 'react-redux';

import logo from "./logo.svg";
import "./App.css";
import "./styles/bootstrap.css";
import "./styles/bootstrap-theme.css";

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"

import ItemList from "./items/components/list";
import ItemCreate from "./items/components/create";
import ItemEdit from "./items/components/edit";
import ItemShow from "./items/components/show";

import Nav from "./navigation/components/main";

const Home = () =>
  <div>
    Home
  </div>

const Menu = () =>
  <div>
    <Route path="/home" component={Home} />
    <Route path="/items/:itemId" component={ItemShow} />
    <Route path="/admin/items" component={ItemList} />
    <Route path="/admin/items/create" component={ItemCreate} />
    <Route path="/admin/items/:itemId" component={ItemEdit} />
  </div>

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router store={this.props.store}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Grammar Notes</h2>
            </div>

            <Nav />
            <Menu />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
// export default connect()(App);
