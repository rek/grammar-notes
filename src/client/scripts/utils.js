import Axios from 'axios'
import Config from 'config.js'

let API = Config.APIRoot + ':' + Config.APIPort || '80'

let handleActions = (reducers, initialState = {}) => {
    return function(state = initialState, action) {
        var reducer = reducers.find((reducer) => reducer.type === action.type);
        return reducer ? reducer.reducer(state, action) : state;
    };
}

let ajax = (base) => {
	let headers = {
		// [Config.headerVersion]: '0.10.0',
	}

	if (Config.token) {
		// headers[Config.headerToken] = Config.token
		// headers[Config.headerEmail] = Config.email
	}

	return Axios.create({
		baseURL: base || API,
		headers
	})
}


export {
	ajax,
	handleActions
}
