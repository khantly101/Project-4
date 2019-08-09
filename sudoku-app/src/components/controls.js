import React 		from 'react'

import '../App.css'

class Control extends React.Component {
	render () {
		return (
			<div className='controls'>
				<div>
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
					<button className='clear' onClick={this.props.buttonClear}>Clear</button>
					<button className='clear' onClick={this.props.buttonHint}>Hint</button>
					<button className={this.props.classList('clear', this.props.notes && 'activeNotes')} onClick={this.props.buttonNotes}>Notes</button>
					<button className='clear' onClick={this.props.buttonUndo}>Undo</button>
				</div>
			</div>
		)
	}
}

export default Control