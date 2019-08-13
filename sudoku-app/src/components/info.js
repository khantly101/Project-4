import React 			from 'react'
import { Animate } 		from 'react-animate-mount'
import MaterialIcon 	from 'material-icons-react'

import '../App.css'

class Difficulty extends React.Component {
	state = {
		about: false,
		how: false
	}

	showAbout = () => {
		this.setState({
			about: !this.state.about
		})
	}

	showHow = () => {
		this.setState({
			how: !this.state.how
		})
	}

	render () {
		return (
			<div className='info'>
				<div className='about'>
					<h3>About</h3>
					<Animate show={this.state.about} type='slide'>
						<div>
							<p> 
								The popular Japanese puzzle game Sudoku
								is based on the logical placement of numbers.
								An online game of logic, Sudoku doesn’t 
								require any calculation nor special math
								skills; all that is needed are brains and
								concentration.
							</p>
						</div>
					</Animate>
					<button className='infoButton' onClick={this.showAbout}><MaterialIcon icon={'expand_more'} size='large' /></button>
				</div>
				<div className='how'>
					<h3>How To Play</h3>
					<Animate show={this.state.how} type='slide'>
						<div>
							<p> 
								The goal of Sudoku is to fill in a 
								9×9 grid with digits so that each column, 
								row, and 3×3 section contain the numbers 
								between 1 to 9. At the beginning of the game, 
								the 9×9 grid will have some of the squares filled in. 
								Your job is to use logic to fill in the missing 
								digits and complete the grid. Don’t forget, 
								a move is incorrect if:

								Any row contains more than one of the same number from 1 to 9
								Any column contains more than one of the same number from 1 to 9
								Any 3×3 grid contains more than one of the same number from 1 to 9
							</p>
							<ul>
								<li>Any row contains more than one of the same number from 1 to 9</li>
								<li>Any column contains more than one of the same number from 1 to 9</li>
								<li>Any 3×3 grid contains more than one of the same number from 1 to 9</li>
							</ul>
						</div>
					</Animate>
					<button className='infoButton' onClick={this.showHow}><MaterialIcon icon={'expand_more'} size='large' /></button>
				</div>
			</div>
		)
	}
}

export default Difficulty