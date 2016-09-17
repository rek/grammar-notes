import React from 'react'
import {connect} from 'react-redux'

import Actions from './actions'

export class App extends React.Component {
	constructor() {
		super()

		// console.log('this', this);
		this.submitForm = this.submitForm.bind(this)
	}

	// componentWillMount() {
	// 	this.context.router.listen(() => {
	// 		this.props.dismissNotification()
	// 	})
	// }

	submitForm(event) {
		event.preventDefault()

		// if ($('form').parsley().validate()) {
		// }
		// console.log('this', this);

		this.props.create({
			title: this.refs.item.value
		})
	}

	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-6'>
						Enter in item name:
					</div>

					<div className='col-md-6'>
						<form onSubmit={this.submitForm} ref='form'>
							<input type='text' ref='item' />
							<button type='submit'>Create</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

// App.contextTypes = {
// 	router: React.PropTypes.object.isRequired
// }

// App.propTypes = {
// }

export default connect((state) => state.ItemsReducer, Actions)(App)
