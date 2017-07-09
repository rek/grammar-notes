import {handleActions} from '../utils';

export default handleActions([
	{
		type: 'LOGIN',
		reducer: (state, action) => {
			console.log('state', state);
			console.log('action', action);

			return {
				authenticated: true
			}
		}
	},
]);
