import React 								from 'react'
import { BrowserRouter as Router, Route } 	from 'react-router-dom'
import { HashRouter } 						from 'react-router-dom'
import Sudoku 								from './components/sudoku.js'
import Index								from './components/index.js'
import Create 								from './components/create.js'
import Update 								from './components/update.js'
import Header 								from './components/header.js'

import './App.css'

class App extends React.Component {
	state = {
		admin: false,
		username: '',
		password: ''
	}

	handleSubmit = (event) => {
		event.preventDefault()
		fetch('https://mighty-dusk-62250.herokuapp.com/users/login', {
				method: 'POST',
				body: JSON.stringify(
					{
						username: this.state.username,
						password_digest: this.state.password
					}),
				headers: {
					'Content-Type': 'application/json'
				}
		})
		.then(res => res.json())
		.then (resJson => {
			console.log(resJson)
			if (resJson.status === 200) {
				this.setState({
					admin: true,
					username: '',
					password: ''
				})
			}
		})
	}

	logOut = () => {
		this.setState({
			admin: false
		})
	}

	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value})
	}

	render () {
		return (
			<HashRouter basename='/'>
				<div>
					<Header handleSubmit={this.handleSubmit} handleChange={this.handleChange} logOut={this.logOut} state={this.state}/>
					<Route path='/' exact component={Sudoku} />
					<Route path='/index' render={(routeProps) => <Index {...routeProps} state={this.state}/>} />
					<Route path='/create' render={(routeProps) => <Create {...routeProps} state={this.state}/>} />
					<Route path='/update' render={(routeProps) => <Update {...routeProps} state={this.state}/>} />
				</div>
			</HashRouter>
		)
 	}
}

export default App
