import React from 'react'
import {connect} from 'react-redux'
import {v4} from 'node-uuid';

import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

let SubNav = ({data = [], selected}) => {
	// console.log('data', data);
	console.log('selected', selected);

	let subnav = data.map((item) => {
		let link = '/items/' + item.item_id

		return (
			<LinkContainer to={link} key={v4()}>
				<NavItem>{item.item_title}</NavItem>
			</LinkContainer>
		)
	})

	// console.log('subnav', subnav);

	return (
		<Navbar>
			<Nav>
				{subnav}
			</Nav>
		</Navbar>
	)
}


SubNav.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default connect()(SubNav)
