import React from 'react'

class Notifications extends React.Component {
	constructor(props) {
		super(props)
		props.subscribe(this.push)
		this.state = {
			notifications: []
		}
	}

	push = (notification) => {
		this.setState({
			notifications: [...this.state.notifications, notification]
		})
		setTimeout(this.pop, 5000)
	}

	pop = () => {
		const notifications = this.state.notifications
		notifications.shift()
		this.setState({
			notifications
		})
	}

	render() {
		return (
			<div>
				{this.state.notifications.slice(0, 4).map(notification => (
					<div style={notification.style}>{notification.content}</div>
				))}
			</div>
		)
	}

}

export default Notifications
