import React from 'react'
import {connect} from 'react-redux'

import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export class SubNav extends React.Component {
	render() {
		let items = this.props.data.map((item) => {
			return (
				<LinkContainer to="/items/{item.item_id}">
					<NavItem>{item.item_title}</NavItem>
				</LinkContainer>
			)
		})

		return (
			<Navbar>
				<Nav>
					{items}
				</Nav>
			</Navbar>
		)
	}
}

SubNav.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default connect((state) => state.AppReducer)(SubNav)
