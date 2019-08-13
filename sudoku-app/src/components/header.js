import React 		from 'react'
import Login 		from './login.js'

import '../App.css'

class Header extends React.Component {
	render () {
		return (
			<div className='header'>
				<h1 className='title'>Sudoku</h1>
				<Login handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}/>
			</div>
		)
	}
}

export default Header