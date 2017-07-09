import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'

import * as Actions from '../../auth/actions'
// console.log('Actions', Actions);

export class MainNav extends React.Component {
  static propTypes = {
    auth: PropTypes.object
  }

  render() {
    // console.log('main nav this.props', this.props);
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to="/">
              <div>
                Grammar notes
              </div>
            </IndexLinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/admin/items">
            <NavItem>Items admin</NavItem>
          </LinkContainer>
          <LinkContainer to="/admin/items/create">
            <NavItem>Add item</NavItem>
          </LinkContainer>
          {this.props.auth &&
            <LinkContainer to="/logout">
              <NavItem>Logout</NavItem>
            </LinkContainer>
          }
        </Nav>
      </Navbar>
    )
  }
}

export default connect((state) => state.AuthReducer, Actions)(MainNav)
