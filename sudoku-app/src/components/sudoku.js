import React 		from 'react'
import Control 		from './controls.js'
import Difficulty 	from './difficulty.js'

import '../App.css'

class Sudoku extends React.Component {
	state = {
		difficulty: 'easy',
		board: [],
		gamestart: false,
		notes: false,
		selectedNum: '',
		selectedBox: '',
		selectedRow: '',
		selectedCol: '',
		selectedGroup: '',
	}

	board = [[	{row:'A', collumn: 'A', group: '1', num: '', set: false, answer: ''},{row:'A', collumn: 'B', group: '1', num: '', set: false, answer: ''},{row:'A', collumn: 'C', group: '1', num: '', set: false, answer: ''},
				{row:'B', collumn: 'A', group: '1', num: '', set: false, answer: ''},{row:'B', collumn: 'B', group: '1', num: '', set: false, answer: ''},{row:'B', collumn: 'C', group: '1', num: '', set: false, answer: ''},
				{row:'C', collumn: 'A', group: '1', num: '', set: false, answer: ''},{row:'C', collumn: 'B', group: '1', num: '', set: false, answer: ''},{row:'C', collumn: 'C', group: '1', num: '', set: false, answer: ''}],

			[	{row:'A', collumn: 'D', group: '2', num: '', set: false, answer: ''},{row:'A', collumn: 'E', group: '2', num: '', set: false, answer: ''},{row:'A', collumn: 'F', group: '2', num: '', set: false, answer: ''},
				{row:'B', collumn: 'D', group: '2', num: '', set: false, answer: ''},{row:'B', collumn: 'E', group: '2', num: '', set: false, answer: ''},{row:'B', collumn: 'F', group: '2', num: '', set: false, answer: ''},
				{row:'C', collumn: 'D', group: '2', num: '', set: false, answer: ''},{row:'C', collumn: 'E', group: '2', num: '', set: false, answer: ''},{row:'C', collumn: 'F', group: '2', num: '', set: false, answer: ''}],

			[	{row:'A', collumn: 'G', group: '3', num: '', set: false, answer: ''},{row:'A', collumn: 'H', group: '3', num: '', set: false, answer: ''},{row:'A', collumn: 'I', group: '3', num: '', set: false, answer: ''},
				{row:'B', collumn: 'G', group: '3', num: '', set: false, answer: ''},{row:'B', collumn: 'H', group: '3', num: '', set: false, answer: ''},{row:'B', collumn: 'I', group: '3', num: '', set: false, answer: ''},
				{row:'C', collumn: 'G', group: '3', num: '', set: false, answer: ''},{row:'C', collumn: 'H', group: '3', num: '', set: false, answer: ''},{row:'C', collumn: 'I', group: '3', num: '', set: false, answer: ''}],

			[	{row:'D', collumn: 'A', group: '4', num: '', set: false, answer: ''},{row:'D', collumn: 'B', group: '4', num: '', set: false, answer: ''},{row:'D', collumn: 'C', group: '4', num: '', set: false, answer: ''},
				{row:'E', collumn: 'A', group: '4', num: '', set: false, answer: ''},{row:'E', collumn: 'B', group: '4', num: '', set: false, answer: ''},{row:'E', collumn: 'C', group: '4', num: '', set: false, answer: ''},
				{row:'F', collumn: 'A', group: '4', num: '', set: false, answer: ''},{row:'F', collumn: 'B', group: '4', num: '', set: false, answer: ''},{row:'F', collumn: 'C', group: '4', num: '', set: false, answer: ''}],

			[	{row:'D', collumn: 'D', group: '5', num: '', set: false, answer: ''},{row:'D', collumn: 'E', group: '5', num: '', set: false, answer: ''},{row:'D', collumn: 'F', group: '5', num: '', set: false, answer: ''},
				{row:'E', collumn: 'D', group: '5', num: '', set: false, answer: ''},{row:'E', collumn: 'E', group: '5', num: '', set: false, answer: ''},{row:'E', collumn: 'F', group: '5', num: '', set: false, answer: ''},
				{row:'F', collumn: 'D', group: '5', num: '', set: false, answer: ''},{row:'F', collumn: 'E', group: '5', num: '', set: false, answer: ''},{row:'F', collumn: 'F', group: '5', num: '', set: false, answer: ''}],

			[	{row:'D', collumn: 'G', group: '6', num: '', set: false, answer: ''},{row:'D', collumn: 'H', group: '6', num: '', set: false, answer: ''},{row:'D', collumn: 'I', group: '6', num: '', set: false, answer: ''},
				{row:'E', collumn: 'G', group: '6', num: '', set: false, answer: ''},{row:'E', collumn: 'H', group: '6', num: '', set: false, answer: ''},{row:'E', collumn: 'I', group: '6', num: '', set: false, answer: ''},
				{row:'F', collumn: 'G', group: '6', num: '', set: false, answer: ''},{row:'F', collumn: 'H', group: '6', num: '', set: false, answer: ''},{row:'F', collumn: 'I', group: '6', num: '', set: false, answer: ''}],

			[	{row:'G', collumn: 'A', group: '7', num: '', set: false, answer: ''},{row:'G', collumn: 'B', group: '7', num: '', set: false, answer: ''},{row:'G', collumn: 'C', group: '7', num: '', set: false, answer: ''},
				{row:'H', collumn: 'A', group: '7', num: '', set: false, answer: ''},{row:'H', collumn: 'B', group: '7', num: '', set: false, answer: ''},{row:'H', collumn: 'C', group: '7', num: '', set: false, answer: ''},
				{row:'I', collumn: 'A', group: '7', num: '', set: false, answer: ''},{row:'I', collumn: 'B', group: '7', num: '', set: false, answer: ''},{row:'I', collumn: 'C', group: '7', num: '', set: false, answer: ''}],

			[	{row:'G', collumn: 'D', group: '8', num: '', set: false, answer: ''},{row:'G', collumn: 'E', group: '8', num: '', set: false, answer: ''},{row:'G', collumn: 'F', group: '8', num: '', set: false, answer: ''},
				{row:'H', collumn: 'D', group: '8', num: '', set: false, answer: ''},{row:'H', collumn: 'E', group: '8', num: '', set: false, answer: ''},{row:'H', collumn: 'F', group: '8', num: '', set: false, answer: ''},
				{row:'I', collumn: 'D', group: '8', num: '', set: false, answer: ''},{row:'I', collumn: 'E', group: '8', num: '', set: false, answer: ''},{row:'I', collumn: 'F', group: '8', num: '', set: false, answer: ''}],

			[	{row:'G', collumn: 'G', group: '9', num: '', set: false, answer: ''},{row:'G', collumn: 'H', group: '9', num: '', set: false, answer: ''},{row:'G', collumn: 'I', group: '9', num: '', set: false, answer: ''},
				{row:'H', collumn: 'G', group: '9', num: '', set: false, answer: ''},{row:'H', collumn: 'H', group: '9', num: '', set: false, answer: ''},{row:'H', collumn: 'I', group: '9', num: '', set: false, answer: ''},
				{row:'I', collumn: 'G', group: '9', num: '', set: false, answer: ''},{row:'I', collumn: 'H', group: '9', num: '', set: false, answer: ''},{row:'I', collumn: 'I', group: '9', num: '', set: false, answer: ''}],
			]

	history = []

	getGame = () => {
		let url = ''
		if (this.state.difficulty === 'easy') {
			url = 'http://localhost:3000/sudokus'
		} else if (this.state.difficulty === 'medium') {
			url = 'http://localhost:3000/sudokums'
		} else if (this.state.difficulty === 'hard') {
			url = 'http://localhost:3000/sudokuhs'
		} else if (this.state.difficulty === 'expert') {
			url = 'http://localhost:3000/sudokues'
		}

		fetch(url)
			.then(response => response.json())
			.then(json => {
				let copyBoard = JSON.parse(JSON.stringify(this.board))
				copyBoard.forEach((ele, index) => {
					ele.forEach((e, i) => {
						e.answer = json.game[index][i][0]
						if (json.game[index][i][1] === 't') {
							e.num = json.game[index][i][0]
							e.set = true
						} else {
							e.set = false
						}
						this.setState({
							gamestart: false,
							notes: false,
							selectedNum: '',
							selectedBox: '',
							selectedRow: '',
							selectedCol: '',
							selectedGroup: '',
							[e.row + e.collumn]: {	num: e.num, 
													answer: e.answer, 
													notes: [{num: '1', active: false},
															{num: '2', active: false},
															{num: '3', active: false},
															{num: '4', active: false},
															{num: '5', active: false},
															{num: '6', active: false},
															{num: '7', active: false},
															{num: '8', active: false},
															{num: '9', active: false}
															]
												}		
						})
					})
					
				})
				this.setState({
					gamestart: true,
					board: copyBoard
				})
				this.history = []
			})
			.catch(error => console.error(error))
	}

	selectBox = (event) => {
		this.setState({
			selectedNum: event.currentTarget.getAttribute('num'),
			selectedBox: event.currentTarget.getAttribute('box'),
			selectedRow: event.currentTarget.getAttribute('row'),
			selectedCol: event.currentTarget.getAttribute('collumn'),
			selectedGroup: event.currentTarget.getAttribute('group')
		})
	}
	
	classList = (...classes) => {
		return classes.filter(item => !!item).join(' ')
	}

	handleChange = (event) => {
		if (isFinite(event.key) && event.key > 0 && event.currentTarget.getAttribute('set') === 'false') {
			this.history.push(this.state)
		}

		if (this.state.notes) {
			let copystateNotes = JSON.parse(JSON.stringify(this.state[event.currentTarget.getAttribute('box')]))
			copystateNotes.notes.forEach((ele) => {
				if (ele.num === event.key) {
					ele.active = !ele.active
				}
			})
			this.setState({
				[event.currentTarget.getAttribute('box')] : copystateNotes
			})
		} else {
			let copystate = JSON.parse(JSON.stringify(this.state[event.currentTarget.getAttribute('box')]))
			copystate.num = event.key
			if (isFinite(event.key) && event.key > 0) {
				this.setState({
					[event.currentTarget.getAttribute('box')]: copystate
				})
			}
		}
	}

	buttonChange = (value) => {
		this.history.push(this.state)
		if (this.state.notes) {
			let copystateNotes = JSON.parse(JSON.stringify(this.state[this.state.selectedBox]))
			copystateNotes.notes.forEach((ele) => {
				if (ele.num === value) {
					ele.active = !ele.active
				}
			})
			this.setState({
				[this.state.selectedBox]: copystateNotes
			})
		} else {
			let copystate = JSON.parse(JSON.stringify(this.state[this.state.selectedBox]))
			copystate.num = value
			this.setState({
				[this.state.selectedBox]: copystate
			})
		} 
	}

	buttonClear = () => {
		this.history.push(this.state)
		let copystate = JSON.parse(JSON.stringify(this.state[this.state.selectedBox]))
		copystate.num = ''
		copystate.notes =  [{num: '1', active: false},
							{num: '2', active: false},
							{num: '3', active: false},
							{num: '4', active: false},
							{num: '5', active: false},
							{num: '6', active: false},
							{num: '7', active: false},
							{num: '8', active: false},
							{num: '9', active: false}
							]
		this.setState({
			[this.state.selectedBox]: copystate
		})
	}

	buttonHint = () => {
		this.history.push(this.state)
		let copystate = JSON.parse(JSON.stringify(this.state[this.state.selectedBox]))
		copystate.num = this.state[this.state.selectedBox].answer
		this.setState({
			[this.state.selectedBox]: copystate
		})
	}

	buttonNotes = () => {
		this.setState({
			notes: !this.state.notes
		})
	}

	buttonUndo = () => {
		this.setState({
			...this.history[this.history.length - 1]
		}, () => {
			if (this.history.length > 0) {
				this.history.pop(); 
			}
			this.setState({
				selectedNum: '',
				selectedBox: '',
				selectedRow: '',
				selectedCol: '',
				selectedGroup: '',
			})
		})
	}

	difficultyChange = (event) => {
		this.setState({difficulty: event.target.value},()=>{this.getGame()})
	}

	componentWillMount() {
		this.getGame()
	}

	componentDidUpdate() {
		let box = document.getElementsByClassName('wrong')
		if (box.length === 0 && this.state.gamestart) {
			console.log('You Win')
		}
	}

	render () {
		return (
			<div>
				<Difficulty difficultyChange={this.difficultyChange} getGame={this.getGame}/>
				<div className='board'>
					{
						this.state.board.map((ele, index) => {
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
														this.state.selectedNum === this.state[e.row + e.collumn].num && this.state[e.row + e.collumn].num > 0 && 'selectedOth',
														this.state.selectedRow === e.row && 'selectedNum',
														this.state.selectedGroup === e.group && 'selectedNum',
														this.state.selectedCol === e.collumn && 'selectedNum', 
														this.state.selectedBox === (e.row + e.collumn) && 'selected',
														this.state[e.row + e.collumn].num !== e.answer && e.set === false && 'wrong'
													)}
												set={e.set.toString()}
												answer={e.answer}
												num={e.num > 0 ? e.num : this.state[e.row + e.collumn].num}
												box={e.row + e.collumn} 
												row={e.row}
												collumn={e.collumn}
												group={e.group} 
												key={e.collumn + e.row}
												onClick={this.selectBox}
												onKeyDown={this.handleChange}
												tabIndex='0'
											>	
												{e.num > 0 ? e.num : this.state[e.row + e.collumn].num}
												<div className={this.classList(
														'notes', 
														this.state[e.row + e.collumn].num > 0 && 'hidden'
													)}
												>
													{
														this.state[e.row+e.collumn].notes.map((elem, index) => {
															return (
																<div 
																	className={this.classList(
																		'note', 
																		!elem.active && 'inactive',
																		this.state[e.row + e.collumn].num > 0 && 'hidden'
																	)}
																	key={index}
																>
																	{elem.num}
																</div>
															)
														})
													}
												</div>
											</div>
										)
									})
								}
								</div>
							)					
						})
					}
				</div>
				<Control 	
						classList={this.classList} 
						buttonChange={this.buttonChange} 
						buttonClear={this.buttonClear} 
						buttonHint={this.buttonHint} 
						buttonNotes={this.buttonNotes} 
						notes={this.state.notes}
						buttonUndo={this.buttonUndo}
				/>
			</div>
		)
	}
}

export default Sudoku