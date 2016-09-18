import {handleActions} from '../utils';
import {ajax} from '../utils'

export default handleActions([
	{
		type: 'CREATE',
		reducer: (state, action) => {
			console.log('state', state);
			console.log('action', action);

			ajax().post('/api/items', {
				item_title: action.payload.title,
				text: action.payload.text || 'test'
			}).then((data) => {
				console.log('ADDED DATA:', data);
			})

			if (!state.items) {
				state.items = []
			}

			return Object.assign({}, state, {
				items: state.items.push(action.payload)
			});
		}
	},
]);
