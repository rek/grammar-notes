import React from 'react'
import {connect} from 'react-redux'

import * as Actions from '../actions'

export class App extends React.Component {
	componentWillMount() {
		this.props.logout()
	}

	render() {
		return (
	        <div>
	        	Logging out...
	        </div>
        )
	}
}

export default connect((state) => state.AuthReducer, Actions)(App)
