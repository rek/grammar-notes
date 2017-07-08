import React from 'react'
import {connect} from 'react-redux'
import {v4} from 'node-uuid';
import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	ButtonToolbar
} from 'react-bootstrap'
import {ajax} from '../../utils'

import Actions from '../actions'

const Show = ({state, handleChange, handleEdit, handleSave}) =>
	<div className='container-fluid' key={state.key}>
		<form>
			<div className='row'>
				<div className='col-md-6'>
					<FormGroup controlId='formControlsTextarea'>
						<ControlLabel>Content:</ControlLabel>
						<FormControl
							rows='20'
							value={state.content}
							onChange={handleChange}
							componentClass='textarea'
							placeholder='...'
						/>
					</FormGroup>
				</div>
			</div>
			<ButtonToolbar>
				{/*
				<Button type='submit' bsSize='small' onClick={handleEdit}>Edit Item</Button>
				*/}
				<Button type='submit' bsStyle='primary' onClick={handleSave}>Save</Button>
			</ButtonToolbar>
		</form>
	</div>

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			key: v4(),
			item: {
				title: 'No Title',
				content: 'Default Content'
			}
		}
	}

	componentDidMount() {
		// console.log('Show mounted', this);
		// console.log('Page:', this.props.routeParams.itemId);

		ajax().get('/api/item/' + this.props.routeParams.itemId)
			.then((data) => {
				// console.log('GOT DATA in show:', data);
				let item = data.data
				console.log('Item:', item);
				this.setState({
					content: item.content
				})
			}).catch((error) => {
				console.log('error', error);
			})
	}

	// save the content of the item
	handleSave(event) {
		event.preventDefault()

		this.props.save({
			item_id: this.props.routeParams.itemId,
			content: this.state.content
		})
	}

	// edit the item title
	handleEdit(event) {
		event.preventDefault()
		console.log('Editing:', this.props.routeParams.itemId);
		this.props.edit(this.props.routeParams.itemId)
	}

	handleChange(event) {
		event.preventDefault()
		this.setState({content: event.target.value});
	}

	render() {
		// console.log('this', this);
		// console.log('state', this.state);

		return (
			<div>
				<Show
					state={this.state}
					handleChange={this.handleChange}
					handleEdit={this.handleEdit}
					handleSave={this.handleSave}
				/>
			</div>
		)
	}
}

// to actions we need to add the things we wanna pass in
// Actions
// eg: handleChange
export default connect((state) => state.ItemsReducer, Actions)(App)
