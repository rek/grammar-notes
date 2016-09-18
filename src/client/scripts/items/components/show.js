import React from 'react'
import {connect} from 'react-redux'
import {default as UUID} from 'node-uuid';

export class App extends React.Component {
	constructor(props) {
		super()
		console.log('props', props);
		console.log('this', this);
	}

	componentDidMount() {
		console.log('this', this);

		// ajax().get('/api/items/' + this.props.data).then((data) => {
		// 	console.log('GOT DATA:', data);
		// 	this.setState({subnav: data.data})
		// })
	}

	render() {
		return (
			<div className='container-fluid' key={UUID.v4()}>
				<div className='row'>
					<div className='col-md-6'>
						<textarea ref='content' />
					</div>
				</div>
			</div>
		)
	}
}

export default connect((state) => state.AppReducer)(App)
