import React 		from 'react'
import { Link } 	from 'react-router-dom'

import '../App.css'

class Index extends React.Component {
	state = {
		loaded: false,
		easy: [],
		medium: [],
		hard: [],
		expert: []
	}

	getData = () => {
		fetch('http://localhost:3000/sudokus')
			.then(response => response.json())
			.then(json => {this.setState({
				easy: json
			})
		})

		fetch('http://localhost:3000/sudokums')
			.then(response => response.json())
			.then(json => {this.setState({
				medium: json
			})
		})

		fetch('http://localhost:3000/sudokuhs')
			.then(response => response.json())
			.then(json => {this.setState({
				hard: json
			})
		})

		fetch('http://localhost:3000/sudokues')
			.then(response => response.json())
			.then(json => {this.setState({
				expert: json
			})
		})

		this.setState({
			loaded: true
		})
	}

	handleDelete = (id, difficulty) => {
		let url = ''
		if (difficulty === 'easy') {
			url = 'http://localhost:3000/sudokus/'
		} else if (difficulty === 'medium') {
			url = 'http://localhost:3000/sudokums/'
		} else if (difficulty === 'hard') {
			url = 'http://localhost:3000/sudokuhs/'
		} else if (difficulty === 'expert') {
			url = 'http://localhost:3000/sudokues/'
		}



		fetch(url + id, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		})
		.then(json => {
			const deletedGame = this.state[difficulty].filter((ele) => ele.id !== id)
			this.setState({
				[difficulty]: deletedGame
			})
		})
		.catch (error => console.error({'Error': error}))
	}


	componentDidMount () {
		this.getData()
	}

	render () {
		return (
			<div>
				<table>
					<caption>Easy</caption>
					<tbody>
						<tr>
							<th>ID</th>
							<th>Game</th>
						</tr>
					</tbody>
					{	
						this.state.loaded ? 
							this.state.easy.map((ele, index) => {
								return (
									<tbody key={index}>
										<tr>
											<td>{ele.id}</td>
											<td>{ele.game}</td>
											<td><button onClick={()=>{this.handleDelete(ele.id,'easy')}}>Delete</button></td>
											<td><Link to={{ 
													pathname: '/Update',
													state: {
														id: ele.id,
														game: ele.game,
														difficulty: 'easy'
													}
												}}>Update</Link>
											</td>
										</tr>
									</tbody>
								)
							}) : null
					}
				</table>
				<br />
				<br />
				<br />
				<table>
					<caption>Medium</caption>
					<tbody>
						<tr>
							<th>ID</th>
							<th>Game</th>
						</tr>
					</tbody>
					{
						this.state.medium.map((ele, index) => {
							return (
								<tbody key={index}>
									<tr>
										<td>{ele.id}</td>
										<td>{ele.game}</td>
									</tr>
								</tbody>
							)
						})
					}
				</table>
				<br />
				<br />
				<br />
				<table>
					<caption>Hard</caption>
					<tbody>
						<tr>
							<th>ID</th>
							<th>Game</th>
						</tr>
					</tbody>
					{
						this.state.hard.map((ele, index) => {
							return (
								<tbody key={index}>
									<tr>
										<td>{ele.id}</td>
										<td>{ele.game}</td>
									</tr>
								</tbody>
							)
						})
					}
				</table>
				<br />
				<br />
				<br />
				<table>
					<caption>Expert</caption>
					<tbody>
						<tr>
							<th>ID</th>
							<th>Game</th>
						</tr>
					</tbody>
					{
						this.state.expert.map((ele, index) => {
							return (
								<tbody key={index}>
									<tr>
										<td>{ele.id}</td>
										<td>{ele.game}</td>
									</tr>
								</tbody>
							)
						})
					}
				</table>
			</div>
		)
	}
}

export default Index