import React from 'react'
import {connect} from 'react-redux'
import {default as UUID} from 'node-uuid';

export class App extends React.Component {

	render() {
		const item = this.props.route.item;
		console.log('item', item);

		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-1'>
						Title
					</div>
					<div className='col-md-1'>
						<input type='text' ref='title' />
					</div>
				</div>
			</div>
		)
	}
}

export default connect((state) => state.AppReducer)(App)
