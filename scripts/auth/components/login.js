import React from 'react'
import {connect} from 'react-redux'

export class App extends React.Component {
	render() {

		return (
			<nav className='navbar navbar-default'>
				<div className='container-fluid'>

					<div className='navbar-header'>
						<button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
							<span className='sr-only'>Toggle navigation</span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
						</button>
						<a className='navbar-brand' href='#'>Brand</a>
					</div>

					<div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
						<ul className='nav navbar-nav'>
							<li className='active'><a href='#'>Link <span className='sr-only'>(current)</span></a></li>
							<li><a href='#'>Link</a></li>
							<li className='dropdown'>
								<a
									href='#'
									className='dropdown-toggle'
									data-toggle='dropdown'
									role='button'
									aria-expanded='false'
								>
									Dropdown
									<span className='caret'></span>
								</a>
								<ul className='dropdown-menu' role='menu'>
									<li> <a href='#'> Action </a></li>
									<li> <a href='#'> Another action </a></li>
									<li> <a href='#'> Something else here </a></li>
									<li className='divider'> </li> <li> <a href='#'> Separated link </a></li>
									<li className='divider'> </li> <li> <a href='#'> One more separated link </a></li>
								</ul>
							</li>
						</ul>
						<form id='signin' className='navbar-form navbar-right' role='form'>
							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='glyphicon glyphicon-user'></i>
								</span>
								<input id='email' type='email' className='form-control' name='email' value='' placeholder='Email Address' />
							</div>

							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='glyphicon glyphicon-lock'></i>
								</span>
								<input id='password' type='password' className='form-control' name='password' value='' placeholder='Password' />
							</div>

							<button type='submit' className='btn btn-primary'>Login</button>
						</form>
					</div>
				</div>
			</nav>
		)
	}
}

export default connect((state) => state.AppReducer)(App)
