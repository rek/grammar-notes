import {ajax} from '../utils'

export default function(dispatch) {
	return {
		create: (title, content) => {
			ajax().post('/api/items', {
				item_title: title,
				content: content || 'Default content...'
			}).then((data) => {
				console.log('ADDED DATA:', data);
			})

			dispatch({
				type: 'CREATE',
				payload: {
					title
				}
			});
		},

		save: (title) => {
			console.log('this', this);
			console.log('title', title);

			dispatch({
				type: 'SAVE',
				payload: {
					title
				}
			});
		},

		edit: (title) => {
			console.log('title', title);
			dispatch({
				type: 'EDIT',
				payload: {
					title
				}
			});
		},
	}
}
