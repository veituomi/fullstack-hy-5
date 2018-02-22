import React from 'react'
import * as loginService from '../services/login'

class Login extends React.Component {
	constructor(props) {
		super(props)
		console.log(props)
		this.state = {
			username: '',
			password: ''
		}
	}

	handleLoginFieldChange = (event) => {
		if (event.target.name === 'password') {
			this.setState({ password: event.target.value })
		} else if (event.target.name === 'username') {
			this.setState({ username: event.target.value })
		}
	}

	login = (event) => {
		event.preventDefault()
		loginService.login(this.state.username, this.state.password)
			.then(response => {
				if (response && response.token) {
					this.props.handler(response)
				}
			})
	}

	render() {
		return (
			<form onSubmit={this.login} method="post">
				<div>
					username
					<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleLoginFieldChange}
					/>
				</div>
				<div>
					password
					<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleLoginFieldChange}
					/>
				</div>
				<button type="submit">log in</button>
			</form>
		)
	}

}

export default Login
