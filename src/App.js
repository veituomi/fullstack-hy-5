import React from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import blogService from './services/blogs'
import * as loginService from './services/login'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: undefined,
			blogs: []
		}
	}

	componentDidMount() {
		const user = loginService.getUser()
		if (user) {
			this.setState({ user })
		}
		blogService.getAll().then(blogs =>
			this.setState({ blogs })
		)
	}

	setUser = (user) => {
		loginService.setUser(user)
		if (!user) {
			loginService.logout()
		}
		this.setState({ user })
	}

	render() {
		if (!this.state.user) {
			return (
				<Login handler={this.setUser}></Login>
			)
		}
		return (
			<div>
				<button onClick={() => this.setUser()}>logout</button>
				<h2>blogs</h2>
				{this.state.blogs.map(blog =>
					<Blog key={blog._id} blog={blog}/>
				)}
			</div>
		);
	}
}

export default App;
