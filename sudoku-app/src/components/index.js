import React 		from 'react'

import '../App.css'

class Index extends React.Component {
	state = {
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
	}

	componentWillMount () {
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
						this.state.easy.map((ele, index) => {
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