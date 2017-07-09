import React, { Component } from "react";
import {connect} from 'react-redux'
import {Provider} from 'react-redux';

import logo from "./logo.svg";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  // withRouter
} from "react-router-dom"

import ItemList from "./items/components/list";
import ItemCreate from "./items/components/create";
import ItemEdit from "./items/components/edit";
import ItemShow from "./items/components/show";

import Login from "./auth/components/login";

import Nav from "./navigation/components/main";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Home = () =>
  <div>
    <h3>This is the home page.</h3>
    <p>Perhaps here we can list some useful help information</p>
  </div>

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
    )
  )}/>
)

const Menu = () =>
  <div>
    <Route path="/login" component={Login}/>
    <PrivateRoute path="/" exact component={Home} />
    <PrivateRoute path="/items/:itemId" component={ItemShow} />
    <PrivateRoute path="/admin/items" component={ItemList} />
    <PrivateRoute path="/admin/items/create" component={ItemCreate} />
    <PrivateRoute path="/admin/items/:itemId" component={ItemEdit} />
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

// export default App;
export default connect()(App);
