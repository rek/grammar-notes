import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Nav from '../navigation/components/main';

import Notification from '../notifications/components'
import NotificationActions from '../notifications/actions'

export class App extends React.Component {
	componentWillMount() {
		this.context.router.listen(() => {
			this.props.dismissNotification()
		})
	}

	render() {
		const {alertType, message, dismissNotification} = this.props

		return (
            <div>
				<Nav />
				<Notification alertType={alertType} message={message} onDismiss={dismissNotification}/>

				{this.props.children}
            </div>
		)
	}
}

App.contextTypes = {
	router: PropTypes.object.isRequired
}

App.propTypes = {
	dismissNotification: PropTypes.func,
	message: PropTypes.string,
	alertType: PropTypes.string,
	children: PropTypes.object
}

export default connect((state) => state.AppReducer, NotificationActions)(App)
