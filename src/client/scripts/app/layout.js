import React from 'react'
import {connect} from 'react-redux'

import Nav from '../navigation/components';
import NotificationActions from '../notifications/actions'
import Notification from '../notifications/components'

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
	router: React.PropTypes.object.isRequired
}

App.propTypes = {
	dismissNotification: React.PropTypes.func,
	message: React.PropTypes.string,
	alertType: React.PropTypes.string,
	children: React.PropTypes.object
}

export default connect((state) => state.AppReducer, NotificationActions)(App)
