import React from 'react'
import {connect} from 'react-redux'

import {
	FormGroup,
	ControlLabel,
	FormControl,
	HelpBlock,
	Button,
	ButtonToolbar
} from 'react-bootstrap'

import Actions from '../actions'

export class App extends React.Component {
	constructor() {
		super(props)

		// console.log('this', this);
		this.submitForm = this.submitForm.bind(this)

		this.state = {
			title: ''
		}
	}

	// componentWillMount() {
	// 	this.context.router.listen(() => {
	// 		this.props.dismissNotification()
	// 	})
	// }

	submitForm(event) {
		event.preventDefault()

		console.log(this);

		this.props.create(
			this.refs.title.value
		)
	}

	getValidationState() {
		const length = this.state.title.length

		if (length > 10) {
			return 'success'
		} else if (length > 5) {
			return 'warning'
		} else if (length > 0) {
			return 'error'
		}
	}

	handleChange(event) {
		console.log('11', this);
		this.setState({title: event.target.value});
	}

	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-6'>
						<form onSubmit={this.submitForm}>
							<FormGroup
								controlId='formBasicText'
								validationState={this.getValidationState()}
							>
								<ControlLabel>Enter in title:</ControlLabel>
								<FormControl
									type='text'
									value={this.state.title}
									placeholder='Enter title, eg: Verbs'
									onChange={this.handleChange}
								/>
								<FormControl.Feedback />
								<HelpBlock>Validation is based on string length.</HelpBlock>
							</FormGroup>

							<ButtonToolbar>
								<Button type='submit' bsSize='large'>Create</Button>
							</ButtonToolbar>
						</form>
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
// }

export default connect((state) => state.ItemsReducer, Actions)(App)
