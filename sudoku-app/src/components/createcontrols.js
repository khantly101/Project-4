import React 		from 'react'
import MaterialIcon 	from 'material-icons-react'

import '../App.css'

class Createcontrols extends React.Component {
	render () {
		return (
			<div className='controls'>
				<div className='difficulty'>
					<select className='select' onChange={this.props.difficultyChange}>
						<option defaultValue value='easy'>Easy</option>
						<option value='medium'>Medium</option>
						<option value='hard'>Hard</option>
						<option value='expert'>Expert</option>
					</select>
				</div>
				<br />
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
					<button className='clear' onClick={this.props.buttonClear}> <MaterialIcon icon='delete_outline' size='tiny' /> Clear</button>
					<button className='clear' onClick={this.props.buttonSet}> <MaterialIcon icon='save_alt' size='tiny' /> Set</button>
					<br />
					<br />
					<button className='clear' onClick={this.props.handleSubmit}> <MaterialIcon icon='save' size='tiny' /> Submit</button>
				</div>
			</div>
		)
	}
}

export default Createcontrols