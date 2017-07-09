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
  // Redirect,
  // withRouter
} from "react-router-dom"

import ItemListComponent from "./items/components/list";
import ItemCreateComponent from "./items/components/create";
import ItemEditComponent from "./items/components/edit";
import ItemShowComponent from "./items/components/show";

import LoginComponent from "./auth/components/login";
import LogoutComponent from "./auth/components/logout";

import Nav from "./navigation/components/main";

import {
  // userIsAuthenticated,
  userIsAuthenticatedMap,
  userIsNotAuthenticated,
  // userIsAdmin
} from './auth/auth'

const HomeComponent = () =>
  <div>
    <h3>This is the home page.</h3>
    <p>Perhaps here we can list some useful help information</p>
  </div>

// Need to apply the hocs here to avoid applying them inside the render method
const Login = userIsNotAuthenticated(LoginComponent)

const [
  Home,
  Logout,
  ItemList,
  ItemShow,
  ItemCreate,
  ItemEdit,
] = userIsAuthenticatedMap([
  HomeComponent,
  LogoutComponent,
  ItemListComponent,
  ItemShowComponent,
  ItemCreateComponent,
  ItemEditComponent,
])

const Menu = ({authenticated}) =>
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/admin/items" component={ItemList} />
    <Route path="/items/:itemId" component={ItemShow} />
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
            <Menu {...this.props} />
          </div>
        </Router>
      </Provider>
    );
  }
}

// export default App;
// export default connect()(App);
export default connect((state) => state.AuthReducer)(App)

