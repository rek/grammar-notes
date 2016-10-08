import React from 'react'
import {connect} from 'react-redux'
import {ajax} from '../utils'

import Nav from '../navigation/components/main';
import SubNav from '../navigation/components/subnav';

import Notification from '../notifications/components'
import NotificationActions from '../notifications/actions'

export class App extends React.Component {
	constructor(props) {
		super(props);
		// console.log('props', props);

		this.state = {
			subnavSelection: false,
			subnav: []
		}
	}

	componentWillMount() {
		this.context.router.listen(() => {
			this.props.dismissNotification()
		})
	}

	componentDidMount() {
		ajax().get('/api/items').then((data) => {
			console.log('GOT DATA:', data);
			// this.setState({subnav: data.data})
		})
	}

	render() {
		const {alertType, message, dismissNotification} = this.props

		return (
            <div>
				<Nav />
				<div>
					this.state.subnavSelection: {this.state.subnavSelection}
				</div>
				<SubNav data={this.state.subnav} selected={this.state.subnavSelection} />
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