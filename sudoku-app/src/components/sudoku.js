import React 		from 'react'

import '../App.css'

let board = [[	{row:'A', collumn: 'A', group: '1', num: '8', set: true, answer: '8'},{row:'A', collumn: 'B', group: '1', num: '', set: false, answer: '5'},{row:'A', collumn: 'C', group: '1', num: '', set: false, answer: '1'},
				{row:'B', collumn: 'A', group: '1', num: '', set: false, answer: '9'},{row:'B', collumn: 'B', group: '1', num: '', set: false, answer: '2'},{row:'B', collumn: 'C', group: '1', num: '', set: false, answer: '6'},
				{row:'C', collumn: 'A', group: '1', num: '', set: false, answer: '4'},{row:'C', collumn: 'B', group: '1', num: '7', set: true, answer: '7'},{row:'C', collumn: 'C', group: '1', num: '3', set: true, answer: '3'}],

			 [	{row:'A', collumn: 'D', group: '2', num: '3', set: true, answer: '3'},{row:'A', collumn: 'E', group: '2', num: '4', set: true, answer: '4'},{row:'A', collumn: 'F', group: '2', num: '', set: false, answer: '9'},
			 	{row:'B', collumn: 'D', group: '2', num: '', set: false, answer: '8'},{row:'B', collumn: 'E', group: '2', num: '7', set: true, answer: '7'},{row:'B', collumn: 'F', group: '2', num: '1', set: true, answer: '1'},
			 	{row:'C', collumn: 'D', group: '2', num: '', set: false, answer: '2'},{row:'C', collumn: 'E', group: '2', num: '', set: false, answer: '5'},{row:'C', collumn: 'F', group: '2', num: '', set: false, answer: '6'}],

			 [	{row:'A', collumn: 'G', group: '3', num: '', set: false, answer: '2'},{row:'A', collumn: 'H', group: '3', num: '7', set: true, answer: '7'},{row:'A', collumn: 'I', group: '3', num: '6', set: true, answer: '6'},
			 	{row:'B', collumn: 'G', group: '3', num: '4', set: true, answer: '4'},{row:'B', collumn: 'H', group: '3', num: '3', set: true, answer: '3'},{row:'B', collumn: 'I', group: '3', num: '5', set: true, answer: '5'},
			 	{row:'C', collumn: 'G', group: '3', num: '', set: false, answer: '9'},{row:'C', collumn: 'H', group: '3', num: '8', set: true, answer: '8'},{row:'C', collumn: 'I', group: '3', num: '1', set: true, answer: '1'}],

			 [	{row:'D', collumn: 'A', group: '4', num: '2', set: true, answer: '2'},{row:'D', collumn: 'B', group: '4', num: '', set: false, answer: '1'},{row:'D', collumn: 'C', group: '4', num: '9', set: true, answer: '9'},
			 	{row:'E', collumn: 'A', group: '4', num: '7', set: true, answer: '7'},{row:'E', collumn: 'B', group: '4', num: '3', set: true, answer: '3'},{row:'E', collumn: 'C', group: '4', num: '4', set: true, answer: '4'},
			 	{row:'F', collumn: 'A', group: '4', num: '', set: false, answer: '6'},{row:'F', collumn: 'B', group: '4', num: '', set: false, answer: '8'},{row:'F', collumn: 'C', group: '4', num: '', set: false, answer: '5'}],

			 [	{row:'D', collumn: 'D', group: '5', num: '7', set: true, answer: '7'},{row:'D', collumn: 'E', group: '5', num: '6', set: true, answer: '6'},{row:'D', collumn: 'F', group: '5', num: '', set: false, answer: '4'},
			 	{row:'E', collumn: 'D', group: '5', num: '', set: false, answer: '5'},{row:'E', collumn: 'E', group: '5', num: '9', set: true, answer: '9'},{row:'E', collumn: 'F', group: '5', num: '', set: false, answer: '8'},
			 	{row:'F', collumn: 'D', group: '5', num: '1', set: true, answer: '1'},{row:'F', collumn: 'E', group: '5', num: '3', set: true, answer: '3'},{row:'F', collumn: 'F', group: '5', num: '2', set: true, answer: '2'}],

			 [	{row:'D', collumn: 'G', group: '6', num: '', set: false, answer: '3'},{row:'D', collumn: 'H', group: '6', num: '', set: false, answer: '5'},{row:'D', collumn: 'I', group: '6', num: '', set: false, answer: '8'},
			 	{row:'E', collumn: 'G', group: '6', num: '', set: false, answer: '6'},{row:'E', collumn: 'H', group: '6', num: '', set: false, answer: '1'},{row:'E', collumn: 'I', group: '6', num: '', set: false, answer: '2'},
			 	{row:'F', collumn: 'G', group: '6', num: '', set: false, answer: '7'},{row:'F', collumn: 'H', group: '6', num: '', set: false, answer: '4'},{row:'F', collumn: 'I', group: '6', num: '9', set: true, answer: '9'}],

			 [	{row:'G', collumn: 'A', group: '7', num: '5', set: true, answer: '5'},{row:'G', collumn: 'B', group: '7', num: '', set: false, answer: '6'},{row:'G', collumn: 'C', group: '7', num: '8', set: true, answer: '8'},
			 	{row:'H', collumn: 'A', group: '7', num: '3', set: true, answer: '3'},{row:'H', collumn: 'B', group: '7', num: '4', set: true, answer: '4'},{row:'H', collumn: 'C', group: '7', num: '2', set: true, answer: '2'},
			 	{row:'I', collumn: 'A', group: '7', num: '1', set: true, answer: '1'},{row:'I', collumn: 'B', group: '7', num: '', set: false, answer: '9'},{row:'I', collumn: 'C', group: '7', num: '', set: false, answer: '7'}],

			 [	{row:'G', collumn: 'D', group: '8', num: '', set: false, answer: '4'},{row:'G', collumn: 'E', group: '8', num: '', set: false, answer: '2'},{row:'G', collumn: 'F', group: '8', num: '7', set: true, answer: '7'},
			 	{row:'H', collumn: 'D', group: '8', num: '9', set: true, answer: '9'},{row:'H', collumn: 'E', group: '8', num: '', set: false, answer: '1'},{row:'H', collumn: 'F', group: '8', num: '', set: false, answer: '5'},
			 	{row:'I', collumn: 'D', group: '8', num: '6', set: true, answer: '6'},{row:'I', collumn: 'E', group: '8', num: '8', set: true, answer: '8'},{row:'I', collumn: 'F', group: '8', num: '', set: false, answer: '3'}],

			 [	{row:'G', collumn: 'G', group: '9', num: '1', set: true, answer: '1'},{row:'G', collumn: 'H', group: '9', num: '', set: false, answer: '9'},{row:'G', collumn: 'I', group: '9', num: '', set: false, answer: '3'},
			 	{row:'H', collumn: 'G', group: '9', num: '', set: false, answer: '8'},{row:'H', collumn: 'H', group: '9', num: '6', set: true, answer: '6'},{row:'H', collumn: 'I', group: '9', num: '', set: false, answer: '7'},
			 	{row:'I', collumn: 'G', group: '9', num: '', set: false, answer: '5'},{row:'I', collumn: 'H', group: '9', num: '', set: false, answer: '2'},{row:'I', collumn: 'I', group: '9', num: '', set: false, answer: '4'}],
			]

class Sudoku extends React.Component {
	state = {
		selectedNum: '',
		selectedBox: '',
		selectedRow: '',
		selectedCol: '',
		selectedGroup: '',
	}

	selectBox = (event) => {
		this.setState({
			selectedNum: event.target.textContent,
			selectedBox: event.target.getAttribute('box'),
			selectedRow: event.target.getAttribute('row'),
			selectedCol: event.target.getAttribute('collumn'),
			selectedGroup: event.target.getAttribute('group')
		}, () => {console.log(this.state.selectedNum, this.state.selectedBox)})
	}

	classList = (...classes) => {
		return classes.filter(item => !!item).join(' ')
	}

	handleChange = (event) => {
		if (isFinite(event.key) && event.key > 0) {
			this.setState({
				[event.target.getAttribute('box')]: event.key
			})
		}
	}

	componentWillMount() {
		board.forEach((ele) => {
			ele.forEach((e) => {
				this.setState({
					[e.row + e.collumn]: e.num
				})
			})
		})
	}

	componentDidUpdate() {
		let box = document.getElementsByClassName('wrong')
		if (box.length === 0) {
			console.log('You win!')
		}
	}

	render () {
		return (
			<div className='board'>
				{
					board.map((ele, index) => {
						return (
							<div className='inner' group={index} key={index}>
							{
								ele.map((e) => {
									return (
										<div 
											className={this.classList(
													'box', 
													e.set && 'set',
													this.state.selectedNum === e.num && this.state.selectedNum > 0 && 'selectedOth',
													this.state.selectedNum === this.state[e.row + e.collumn] && this.state[e.row + e.collumn] > 0 && 'selectedOth',
													this.state.selectedRow === e.row && 'selectedNum',
													this.state.selectedGroup === e.group && 'selectedNum',
													this.state.selectedCol === e.collumn && 'selectedNum', 
													this.state.selectedBox === (e.row + e.collumn) && 'selected',
													this.state[e.row + e.collumn] !== e.answer && 'wrong'
												)}
											answer={e.answer}
											box={e.row + e.collumn} 
											row={e.row} 
											collumn={e.collumn}
											group={e.group} 
											key={e.collumn + e.row}
											onClick={this.selectBox}
											onKeyDown={this.handleChange}
											tabIndex='0'
										>	
											{e.num > 0 ? e.num : this.state[e.row + e.collumn]}
										</div>
									)
								})
							}
							</div>
						)
						
					})
				}
			</div>
		)
	}
}

export default Sudoku