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
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-6">
						Getting better
					</div>

					<div class="col-md-6">
						Right pannel
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
