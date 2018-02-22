import React from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import NewBlog from './components/NewBlog'
import Notifications from './components/Notifications'
import * as blogService from './services/blogs'
import * as loginService from './services/login'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: undefined,
			blogs: []
		}
	}

	pushNotification = () => void 0

	subscribeNotifications = (callback) => {
		this.pushNotification = callback
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
			this.pushNotification({
				content: 'Logged out!'
			})
		}
		this.setState({ user })
	}

	selectContent = () => {
		if (!this.state.user) {
			return (
				<Login handler={this.setUser} pushNotification={this.pushNotification}></Login>
			)
		}
		return (
			<div>
				<button onClick={() => this.setUser()}>logout</button>
				<NewBlog pushNotification={this.pushNotification}></NewBlog>
				<h2>blogs</h2>
				{this.state.blogs.map(blog =>
					<Blog key={blog._id} blog={blog}/>
				)}
			</div>
		)
	}

	render() {
		return (
			<div>
				<Notifications subscribe={this.subscribeNotifications}></Notifications>
				{this.selectContent()}
			</div>
		)
		
	}
}

export default App;
