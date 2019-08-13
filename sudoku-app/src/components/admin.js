import React 		from 'react'
import { Link } 	from 'react-router-dom'

import '../App.css'

class Admin extends React.Component {
	render () {
		return (
			<div className='admin'>
				<Link to='/'><button className="adminBut">Home</button></Link>
				<Link to='/index'><button className="adminBut">Index</button></Link>
				<Link to='/create'><button className="adminBut">Create</button></Link>
				<button className="adminButl" onClick={this.props.logOut}>Log Out</button>
			</div>
		)
	}
}

export default Admin