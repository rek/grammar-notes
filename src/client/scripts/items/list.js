import React from 'react'
import {connect} from 'react-redux'

import notiActions from '../notifications/actions'
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
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-6'>
						LIST
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

export default connect((state) => state.AppReducer, notiActions)(App)
