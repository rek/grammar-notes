import React from 'react'
import {connect} from 'react-redux'
import {default as UUID} from 'node-uuid';

import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export class SubNav extends React.Component {
	render() {
		console.log('Selected:', this.props.selected);
		let items = this.props.data.map((item) => {
			let link = '/items/' + item.item_id

			return (
				<LinkContainer to={link} key={UUID.v4()}>
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
