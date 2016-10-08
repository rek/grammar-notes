import React from 'react'
import {connect} from 'react-redux'

import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'

export class MainNav extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<IndexLinkContainer to="/">
							<NavItem>Grammar notes</NavItem>
						</IndexLinkContainer>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<IndexLinkContainer to="/admin/items">
						<NavItem>Items admin</NavItem>
					</IndexLinkContainer>
					<IndexLinkContainer to="/admin/items/create">
						<NavItem>Add item</NavItem>
					</IndexLinkContainer>
				</Nav>
			</Navbar>
		)
	}
}

MainNav.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default connect((state) => {
	// console.log('state', state);
	// dont need our own reducer at the moment:
	return state.AppReducer
})(MainNav)
