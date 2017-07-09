import React from 'react'
import {connect} from 'react-redux'
import {
  Redirect,
} from "react-router-dom"

import Actions from '../actions'

export class App extends React.Component {
  state = {
    redirectToReferrer: false,
    password: '',
    email: ''
  }

  login = (e) => {
    e.preventDefault()
    this.props.login(this.state)
    // this.dispatch('LOGIN', this.state)
    // fakeAuth.authenticate(() => {
    //   this.setState({ redirectToReferrer: true })
    // })
  }

  updateField = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {from} = this.props.location.state || { from: { pathname: '/' } }
    const {redirectToReferrer} = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse'>
            <form className='navbar-form navbar-right'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='glyphicon glyphicon-user'></i>
                </span>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  value={this.state.email}
                  onChange={this.updateField}
                  placeholder='Email Address'
                />
              </div>

              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='glyphicon glyphicon-lock'></i>
                </span>
                <input
                  id='password'
                  type='password'
                  className='form-control'
                  name='password'
                  value={this.state.password}
                  onChange={this.updateField}
                  placeholder='Password'
                />
              </div>

              <button
                className='btn btn-primary'
                onClick={this.login}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect((state) => state.AppReducer, Actions)(App)
