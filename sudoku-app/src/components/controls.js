import React 			from 'react'
import MaterialIcon 	from 'material-icons-react'

import '../App.css'

class Control extends React.Component {
	render () {
		return (
			<div className='controls'>
				<div className='butNum'>
					<button onClick={()=>{this.props.buttonChange('1')}}>1</button>
					<button onClick={()=>{this.props.buttonChange('2')}}>2</button>
					<button onClick={()=>{this.props.buttonChange('3')}}>3</button>
					<button onClick={()=>{this.props.buttonChange('4')}}>4</button>
					<button onClick={()=>{this.props.buttonChange('5')}}>5</button>
					<button onClick={()=>{this.props.buttonChange('6')}}>6</button>
					<button onClick={()=>{this.props.buttonChange('7')}}>7</button>
					<button onClick={()=>{this.props.buttonChange('8')}}>8</button>
					<button onClick={()=>{this.props.buttonChange('9')}}>9</button>
				</div>
				<br />
				<div className='extra'>
					<button className='clear' onClick={this.props.buttonClear}> <MaterialIcon icon="delete_outline" size='tiny' /> Clear</button>
					<button className='clear' onClick={this.props.buttonHint}> <MaterialIcon icon="find_replace" size='tiny' /> Hint</button>
					<button className={this.props.classList('clear', this.props.notes && 'activeNotes')} onClick={this.props.buttonNotes}> <MaterialIcon icon="edit" size='tiny' /> Notes {this.props.notes ? 'On':'Off'}</button>
					<button className='clear' onClick={this.props.buttonUndo}> <MaterialIcon icon="replay" size='tiny' /> Undo</button>
				</div>
			</div>
		)
	}
}

export default Control