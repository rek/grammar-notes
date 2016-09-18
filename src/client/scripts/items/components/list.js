import React from 'react'
import {connect} from 'react-redux'
import {ajax} from '../../utils'
import {default as UUID} from 'node-uuid';

export class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [{
			}]
		}
	}

	componentDidMount() {
		ajax().get('/api/items').then((items) => {
			console.log('GOT DATA:', items);
			this.setState({items: items.data})
		})
	}

	handelClick(item) {
		console.log('item', item);
	}

	render() {
		return (
			<div className='container-fluid'>
				{this.state.items.map((item) => {
					return (
						<div className='row' key={UUID.v4()}>
							<div className='col-md-6' onClick={(context) => this.handelClick(context)}>
								{item.item_title}
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default connect((state) => state.AppReducer)(App)
