import React 		from 'react'

import '../App.css'

class Login extends React.Component {
	render () {
		return (
			<div>
				<form className='login' onSubmit={this.props.handleSubmit}>
					<label htmlFor='username'></label>
					<input type='text' id='username' onChange={this.props.handleChange} placeholder='Username'/>
					<br />
					<label htmlFor='password'></label>
					<input type='password' id='password' onChange={this.props.handleChange} placeholder='Password'/>
					<input className='hidden' type='submit' />
				</form>
			</div>
		)
	}
}

export default Login