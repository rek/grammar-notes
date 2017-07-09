
export default function(dispatch) {
	return {
		login(data) {
			console.log('data', data);
			dispatch({
				type: 'LOGIN',
				payload: data
			});
		}
	}
}
