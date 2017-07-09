// import {handleActions} from '../utils';

// export default handleActions([
// 	{
// 		type: 'LOGIN',
// 		reducer: (state, action) => {
// 			// console.log('state', state);
// 			// console.log('action', action);

// 			return {
// 				// ...state,
// 				authenticated: true
// 			}
// 		}
// 	}, {
// 		type: 'LOGOUT',
// 		reducer: (state, action) => {
// 			return {
// 				authenticated: false
// 			}
// 		}
// 	},
// ]);

import * as constants from './constants'

const initialState = {
  auth: null,
  isLoading: false
}

export default function userUpdate(state = initialState, { type, payload }) {
  switch (type) {
    case constants.USER_LOGGING_IN:
      return { ...initialState, isLoading: true }
    case constants.USER_LOGGED_IN:
      return { auth: payload, isLoading: false }
    case constants.USER_LOGGED_OUT:
      return initialState
    default:
      return state
  }
}
