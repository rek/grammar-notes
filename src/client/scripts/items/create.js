import React from 'react'
import {connect} from 'react-redux'
import ItemActions from './actions'

export class App extends React.Component {
	constructor() {
		super()

		console.log('this', this);
	}

	// componentWillMount() {
	// 	this.context.router.listen(() => {
	// 		this.props.dismissNotification()
	// 	})
	// }

	submitForm(event) {
		event.preventDefault()

		// if (!this.state.doingLogin && $('form').parsley().validate()) {

		console.log('this.item.email.value', this.refs.email.value);

		console.log('props', this.props);
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

App.contextTypes = {
	router: React.PropTypes.object.isRequired
}

App.propTypes = {
}

export default connect((state) => state.ItemsReducer, ItemActions)(App)
