import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect'

import Loading from './components/loading'

const locationHelper = locationHelperBuilder({})


const userIsAuthenticatedRaw = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: (state) => state.AuthReducer.auth !== null,
  authenticatingSelector: (state) => state.AuthReducer.isLoading,
  AuthenticatingComponent: Loading,
  wrapperDisplayName: 'UserIsAuthenticated'
})

export const userIsAuthenticatedMap = (components) => components.map(userIsAuthenticatedRaw)
export const userIsAuthenticated = userIsAuthenticatedRaw

// export const userIsAuthenticated = connectedRouterRedirect({
//   redirectPath: '/login',
//   authenticatedSelector: (state) => state.AuthReducer.auth !== null,
//   authenticatingSelector: (state) => state.AuthReducer.isLoading,
//   AuthenticatingComponent: Loading,
//   wrapperDisplayName: 'UserIsAuthenticated'
// })

export const userIsAdmin = connectedRouterRedirect({
  redirectPath: '/',
  allowRedirectBack: false,
  authenticatedSelector: state => state.AuthReducer.auth !== null && state.AuthReducer.auth.isAdmin,
  predicate: user => user.isAdmin,
  wrapperDisplayName: 'UserIsAdmin'
})

export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false,
  // Want to redirect the user when they are done loading and authenticated
  authenticatedSelector: state => state.AuthReducer.auth === null && state.AuthReducer.isLoading === false,
  wrapperDisplayName: 'UserIsNotAuthenticated'
})
