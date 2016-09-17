import React from 'react'
import {connect} from 'react-redux'

// import notiActions from '../notifications/actions'
// import Notification from '../notifications/components'

export class App extends React.Component {

	// componentWillMount() {
	// 	this.context.router.listen(() => {
	// 		this.props.dismissNotification()
	// 	})
	// }

	render() {
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

// App.contextTypes = {
// 	router: React.PropTypes.object.isRequired
// }

// App.propTypes = {
// 	children: React.PropTypes.object
// }

export default connect((state) => state.AppReducer)(App)
