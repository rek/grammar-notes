import React from 'react'
import {connect} from 'react-redux'
import {ajax} from '../../utils'
import {v4} from 'node-uuid';

const App = React.createClass({
	getInitialState() {
		return {
			items: []
		}
	},

	componentDidMount() {
		ajax().get('/api/items').then((items) => {
			console.log('GOT DATA:', items);
			this.setState({items: items.data})
		})
	},

	handelClick(item) {
		console.log('item', item);
	},

	render() {
		let items = this.state.items || []

		return (
			<div className='container-fluid'>
				{items.map((item) => {
					return (
						<div className='row' key={v4()}>
							<div className='col-md-6' onClick={(context) => this.handelClick(context)}>
								{item.item_title}
							</div>
						</div>
					)
				})}
			</div>
		)
	}
})

export default connect((state) => state.ItemsReducer)(App)
