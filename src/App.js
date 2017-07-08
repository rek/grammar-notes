import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"

import ItemList from "./items/components/list";
import ItemCreate from "./items/components/create";
import ItemEdit from "./items/components/edit";
import ItemShow from "./items/components/show";

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
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Grammar Notes</h2>
          </div>

          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
