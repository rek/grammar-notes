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

const updateItem = (data) =>
	ajax().put('/api/item/' + data.item_id, {
		item_title: data.item_title,
		content: data.content || 'Default content...'
	})


export default function(dispatch) {
	return {
		adminEditItem(item) {
			console.log('item', item);
			updateItem.then(() => {
				console.log('done');
				dispatch({
					type: 'UPDATE',
					payload: item
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
