import * as constants from './constants'

export const login = data => dispatch => {
  dispatch({
    type: constants.USER_LOGGING_IN
  })
  // Wait 2 seconds before "logging in"
  setTimeout(() => {
    dispatch({
      type: constants.USER_LOGGED_IN,
      payload: data
    })
  }, 2000)
}

// export const logout = () => (dispatch) => {
//   console.log('DOING LOGOUT');
//   dispatch({
//     type: constants.USER_LOGGED_OUT
//   })
// }

export function logout() {
  console.log('DOING LOGOUT');
  return {
    type: constants.USER_LOGGED_OUT
  }
}
