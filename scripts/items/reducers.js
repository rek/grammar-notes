import {handleActions} from '../utils';

export default handleActions([
	{
		type: 'SUB-PAGE',
		reducer: (state, action) => {
			// console.log('state', state);
			// console.log('action', action);

			return {
				subnavSelection: action.payload.id
			}
		}
	},
	{
		type: 'CREATE',
		reducer: (state, action) => {
			console.log('state', state);
			console.log('action', action);

			// if (!state.subnav) {
			// 	state.subnav = []
			// }

			// return Object.assign({}, state, {
			// 	subnav: state.subnav.push(action.payload)
			// });
		}
	},
]);
