import React from 'react'
import {connect} from 'react-redux'

import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export class SubNav extends React.Component {
	render() {
		let items = this.props.data.map((item) => {
			let link = '/items/' + item.item_id

			return (
				<LinkContainer to={link}>
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

export default connect()(SubNav)
