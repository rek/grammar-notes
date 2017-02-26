import _ from 'lodash'
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

const updateItem = (data, fields) =>
	ajax().put('/api/item/' + data.item_id, _.pick(data, fields))

export default function(dispatch) {
	return {
		adminEditItem(data) {
			// console.log('Item:', data);
			updateItem(data, ['item_title']).then(() => {
				// console.log('Done');
				dispatch({
					type: 'UPDATE',
					payload: data
				});
			})
		},

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
			console.log('Data:', data);
			updateItem(data, ['content']).then((data) => {
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
