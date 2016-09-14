import React from 'react'
import {connect} from 'react-redux'

export class App extends React.Component {

	render() {
		return (
			<h1>HOME</h1>
		)
	}
}

App.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default connect((state) => state.AppReducer)(App)
