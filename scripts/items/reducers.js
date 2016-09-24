import {handleActions} from '../utils';

export default handleActions([
	{
		type: 'CREATE',
		reducer: (state, action) => {
			console.log('state', state);
			console.log('action', action);

			if (!state.items) {
				state.items = []
			}

			return Object.assign({}, state, {
				items: state.items.push(action.payload)
			});
		}
	},
]);
