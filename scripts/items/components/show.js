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

export class App extends React.Component {
	constructor(props) {
		super(props)
		console.log('props', props);
		console.log('this', this);

		this.state = {
			key: v4(),
			title: '',
			content: 'test'
		}
	}

	componentDidMount() {
		console.log('show mounted', this);
		console.log('Page:', this.props.routeParams.itemId);

		ajax().get('/api/item/' + this.props.routeParams.itemId).then((data) => {
			console.log('GOT DATA in show:', data);
			this.setState({item: data.data})
		})
	}

	// save the content of the item
	handleSave(event) {
		event.preventDefault()

		this.props.save({
			id: this.props.routeParams.itemId,
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
		return (
			<div className='container-fluid' key={this.state.key}>
				<form>
					<div className='row'>
						<div className='col-md-6'>
							<FormGroup controlId='formControlsTextarea'>
								<ControlLabel>Content:</ControlLabel>
								<FormControl
									value={this.state.content}
									onChange={this.handleChange.bind(this)}
									componentClass='textarea'
									placeholder='...'
								/>
							</FormGroup>
						</div>
					</div>
					<ButtonToolbar>
						<Button type='submit' bsSize='small' onClick={this.handleEdit.bind(this)}>Edit Item</Button>
						<Button type='submit' bsStyle='primary' onClick={this.handleSave.bind(this)}>Save</Button>
					</ButtonToolbar>
				</form>
			</div>
		)
	}
}

export default connect((state) => state.ItemsReducer, Actions)(App)
