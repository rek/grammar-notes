import React from 'react'
import {connect} from 'react-redux'
// import Nav from '../navigation/components';

export class App extends React.Component {

	render() {
		const {alertType, message, dismissNotification} = this.props

		return (
			// <Nav />
			<div>
			hah
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
