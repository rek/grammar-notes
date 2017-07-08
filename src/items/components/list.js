import React from 'react'
import {connect} from 'react-redux'
import {ajax} from '../../utils'
import {v4} from 'node-uuid';

import {NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import Actions from '../actions'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			items: []
		}
	}

	componentDidMount() {
		ajax().get('/api/items').then((items) => {
			// console.log('GOT DATA:', items);
			this.setState({items: items.data})
		})
	}

	render() {
		let items = this.state.items || []

		// onClick={() => this.props.adminEditItem(item)}

		return (
			<div>
				<h2>Edit titles</h2>

				<div className='container-fluid'>
					{items.map((item) => {
						// console.log('item', item);
						let link = '/admin/items/' + item.item_id

						return (
							<div className='row' key={v4()}>
								<div className='col-md-6'>
									<LinkContainer to={link} key={v4()}>
										<NavItem>{item.item_title}</NavItem>
									</LinkContainer>

									{/*
									{item.item_title}
									*/}

								</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default connect((state) => state.ItemsReducer, Actions)(App)
