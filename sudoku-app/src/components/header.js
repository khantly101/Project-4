import React 		from 'react'
import Login 		from './login.js'
import Admin 		from './admin.js'

import '../App.css'

class Header extends React.Component {
	render () {
		return (
			<div className='header'>
				<h1 className='title'>Sudoku</h1>
				{
					this.props.state.admin ? <Admin logOut={this.props.logOut}/> : <Login handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}/>
				}
			</div>
		)
	}
}

export default Header