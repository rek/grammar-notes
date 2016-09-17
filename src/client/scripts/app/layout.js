import React from 'react'
import {connect} from 'react-redux'
import {ajax} from '../utils'

import Nav from '../navigation/components';
import SubNav from '../navigation/components/subnav';

import Notification from '../notifications/components'
import NotificationActions from '../notifications/actions'

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subnav: [{
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

	componentDidMount() {
		ajax().get('/items').then((data) => {
			console.log('GOT DATA:', data);
		})
	}

	render() {
		const {alertType, message, dismissNotification} = this.props

		return (
            <div>
				<Nav />
				<SubNav data={this.state.subnav} />
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
