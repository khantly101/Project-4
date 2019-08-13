import React 			from 'react'
import MaterialIcon 	from 'material-icons-react'

import '../App.css'

class Header extends React.Component {
	render () {
		return (
			<div className='winBox'>
				<div className='win'>
					<div className='banner'></div>
					<h2 className='victory'><MaterialIcon icon="cake" size='tiny' /> You Win! <MaterialIcon icon="cake" size='tiny' /></h2>
					<button className='restart' onClick={this.props.getGame}>New Game</button>
				</div>
			</div>
		)
	}
}

export default Header