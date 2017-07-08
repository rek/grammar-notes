import React from 'react'
import {connect} from 'react-redux'
import {ajax} from '../../utils'

import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	ButtonToolbar
} from 'react-bootstrap'

import Actions from '../actions'

const App = React.createClass({
	getInitialState() {
		return {}
	},

	componentDidMount() {
		ajax().get('/api/item/' + this.props.params.itemId).then((item) => {
			// console.log('GOT DATA:', item);
			this.setState({...item.data})
			// console.log('Item:', this.state.item);
		})
	},

	submitForm(event) {
		event.preventDefault()
		console.log('State:', this.state);
		this.props.adminEditItem(this.state)
	},

	handleChange(event) {
		this.setState({item_title: event.target.value});
	},

	getValidationState() {
		const item = this.state.item_title || ''
		const length = item.length

		if (length > 3) {
			return 'success'
		// } else if (length > 5) {
		// 	return 'warning'
		} else if (length > 0) {
			return 'error'
		}
	},

	render() {
		// const item = this.props.route.item;
		// console.log('item', item);
		// console.log('this.props', this.props);

		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-6'>
						<form onSubmit={this.submitForm}>
							<FormGroup
								controlId='formBasicText'
								validationState={this.getValidationState()}
							>
								<ControlLabel>Title:</ControlLabel>
								<FormControl
									type='text'
									value={this.state.item_title}
									placeholder='Enter title here...'
									onChange={this.handleChange}
								/>
								<FormControl.Feedback />
							</FormGroup>

							<ButtonToolbar>
								<Button type='submit' bsSize='large'>Update</Button>
								<Button type='submit' bsSize='small'>DELETE</Button>
							</ButtonToolbar>
						</form>
					</div>
				</div>
			</div>
		)
	}
})

export default connect((state) => state.ItemsReducer, Actions)(App)
