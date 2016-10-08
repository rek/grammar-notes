import React from 'react'
import {connect} from 'react-redux'
import {ajax} from '../utils'

import SubNav from '../navigation/components/subnav';

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subnavSelection: false,
			subnav: []
		}
	}

	componentDidMount() {
		ajax().get('/api/items').then((data) => {
			console.log('GOT DATA:', data);
			this.setState({subnav: data.data})
		})
	}

	render() {
		return (
			<div>
				<SubNav
					data={this.state.subnav}
					selected={this.state.subnavSelection}
				/>
				{this.props.children}
			</div>
		)
	}
}

App.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default connect((state) => state.AppReducer)(App)
