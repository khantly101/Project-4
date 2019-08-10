import React 		from 'react'

import '../App.css'

class Difficulty extends React.Component {
	render () {
		return (
			<div className='difficulty'>
				<select onChange={this.props.difficultyChange}>
					<option defaultValue value='easy'>Easy</option>
					<option value='medium'>Medium</option>
					<option value='hard'>Hard</option>
					<option value='expert'>Expert</option>
				</select>
				<button className='new' onClick={this.props.getGame}>New Game</button>
			</div>
		)
	}
}

export default Difficulty