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
				<br />
				<table>
					<tbody>
						<tr>
							<th>Easy</th>
							<th>|</th>
							<th>ID</th>
							<th>Delete</th>
							<th>Update</th>
						</tr>
					</tbody>
					{	
						this.state.loaded ? 
							this.state.easy.map((ele, index) => {
								return (
									<tbody key={index}>
										<tr>
											<td></td>
											<td>|</td>
											<td>{ele.id}</td>
											<td><button className='delete' onClick={()=>{this.handleDelete(ele.id,'easy')}}>Delete</button></td>
											<td><Link to={{ 
													pathname: '/Update',
													state: {
														id: ele.id,
														game: ele.game,
														difficulty: 'easy'
													}
												}}><button className='delete'>Update</button></Link>
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
					<tbody>
						<tr>
							<th>Medium</th>
							<th>|</th>
							<th>ID</th>
							<th>Delete</th>
							<th>Update</th>
						</tr>
					</tbody>
					{	
						this.state.loaded ? 
							this.state.medium.map((ele, index) => {
								return (
									<tbody key={index}>
										<tr>
											<td></td>
											<td>|</td>
											<td>{ele.id}</td>
											<td><button className='delete' onClick={()=>{this.handleDelete(ele.id,'medium')}}>Delete</button></td>
											<td><Link to={{ 
													pathname: '/Update',
													state: {
														id: ele.id,
														game: ele.game,
														difficulty: 'medium'
													}
												}}><button className='delete'>Update</button></Link>
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
					<tbody>
						<tr>
							<th>Hard</th>
							<th>|</th>
							<th>ID</th>
							<th>Delete</th>
							<th>Update</th>
						</tr>
					</tbody>
					{	
						this.state.loaded ? 
							this.state.hard.map((ele, index) => {
								return (
									<tbody key={index}>
										<tr>
											<td></td>
											<td>|</td>
											<td>{ele.id}</td>
											<td><button className='delete' onClick={()=>{this.handleDelete(ele.id,'hard')}}>Delete</button></td>
											<td><Link to={{ 
													pathname: '/Update',
													state: {
														id: ele.id,
														game: ele.game,
														difficulty: 'hard'
													}
												}}><button className='delete'>Update</button></Link>
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
					<tbody>
						<tr>
							<th>Expert</th>
							<th>|</th>
							<th>ID</th>
							<th>Delete</th>
							<th>Update</th>
						</tr>
					</tbody>
					{	
						this.state.loaded ? 
							this.state.expert.map((ele, index) => {
								return (
									<tbody key={index}>
										<tr>
											<td></td>
											<td>|</td>
											<td>{ele.id}</td>
											<td><button className='delete' onClick={()=>{this.handleDelete(ele.id,'expert')}}>Delete</button></td>
											<td><Link to={{ 
													pathname: '/Update',
													state: {
														id: ele.id,
														game: ele.game,
														difficulty: 'expert'
													}
												}}><button className='delete'>Update</button></Link>
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
			</div>
		)
	}
}

export default Index