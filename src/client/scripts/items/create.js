import React from 'react'
import {connect} from 'react-redux'
// import 'parsleyjs'

// import notiActions from '../notifications/actions'
// import Notification from '../notifications/components'

export class App extends React.Component {

	componentWillMount() {
		this.context.router.listen(() => {
			this.props.dismissNotification()
		})
	}

	submitForm(e) {
		e.preventDefault()

		// if (!this.state.doingLogin && $('form').parsley().validate()) {

		console.log('this.item.email.value', this.refs.email.value);
	}

	render() {
		// const {alertType, message, dismissNotification} = this.props

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
	dismissNotification: React.PropTypes.func,
	message: React.PropTypes.string,
	alertType: React.PropTypes.string,
	children: React.PropTypes.object
}

export default connect((state) => state.AppReducer)(App)
