import {ajax} from '../utils'

const createItems = (title, content) => {
	ajax().post('/api/items', {
		item_title: title,
		content: content || 'Default content...'
	}).then((data) => {
		console.log('ADDED DATA:', data);
		return data
	})
}

export default function(dispatch) {
	return {
		create: (title, content) => {
			createItems(title, content)

			dispatch({
				type: 'CREATE',
				payload: {
					title
				}
			});
		},

		save: (data) => {
			console.log('this', this);
			console.log('data', data);
			ajax().post('/api/item/' + data.id, {
				// item_title: data.title,
				content: data.content || 'Default content...'
			}).then((data) => {
				console.log('ADDED DATA:', data);
			})

			dispatch({
				type: 'SAVE',
				payload: {
					id: data.id,
					content: data.content
				}
			});
		},

		edit: (id) => {
			console.log('id', id);
			dispatch({
				type: 'SUB-PAGE',
				payload: {
					id
				}
			});
		},
	}
}
