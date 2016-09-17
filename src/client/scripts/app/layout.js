import React from 'react'
import {connect} from 'react-redux'

import Nav from '../navigation/components';
import SubNav from '../navigation/components/subnav';

import NotificationActions from '../notifications/actions'
import Notification from '../notifications/components'

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [{
				item_id: '1',
				item_title: 'nice'
			}]
		}
	}

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
				<SubNav data={this.state.data} />
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