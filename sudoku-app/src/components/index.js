import React 		from 'react'
import { Redirect }	from 'react-router'
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
		fetch('https://mighty-dusk-62250.herokuapp.com/sudokus')
			.then(response => response.json())
			.then(json => {this.setState({
				easy: json
			})
		})

		fetch('https://mighty-dusk-62250.herokuapp.com/sudokums')
			.then(response => response.json())
			.then(json => {this.setState({
				medium: json
			})
		})

		fetch('https://mighty-dusk-62250.herokuapp.com/sudokuhs')
			.then(response => response.json())
			.then(json => {this.setState({
				hard: json
			})
		})

		fetch('https://mighty-dusk-62250.herokuapp.com/sudokues')
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
			url = 'https://mighty-dusk-62250.herokuapp.com/sudokus/'
		} else if (difficulty === 'medium') {
			url = 'https://mighty-dusk-62250.herokuapp.com/sudokums/'
		} else if (difficulty === 'hard') {
			url = 'https://mighty-dusk-62250.herokuapp.com/sudokuhs/'
		} else if (difficulty === 'expert') {
			url = 'https://mighty-dusk-62250.herokuapp.com/sudokues/'
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
				{
					this.props.state.admin ? null : <Redirect to='/'/>
				}
			</div>
		)
	}
}

export default Index