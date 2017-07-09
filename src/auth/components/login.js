import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {login} from '../actions'

const Actions = {
  login
}

export class App extends React.Component {
  state = {
    password: '',
    email: '',
    isAdmin: false
  }

  static propTypes = {
    login: PropTypes.func.isRequired
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
    // console.log('Login this.props', this.props);
    // const {from} = this.props.location.state || { from: { pathname: '/' } }

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse'>
            <form className='navbar-form navbar-left'>
              <div>
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
              </div>

              <br />

              <div>
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
              </div>

              <br />

              <button
                className='btn btn-primary navbar-left'
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

export default connect((state) => state.AuthReducer, Actions)(App)
