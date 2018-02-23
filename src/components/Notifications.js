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
				{this.state.notifications
					.filter(notification => !notification.dismissed)
					.slice(0, 4)
					.map(notification => (
						<div style={{
							border: '2px solid black',
							background: 'orange',
							...notification.style
						}}>{notification.content}
						{(notification.buttons || []).map(button =>
							<button onClick={() => {
								notification.dismissed = true
								this.setState({ notifications: this.state.notifications })
								button.callback()
							}}>{button.label}</button>
						)}
						</div>
					))}
			</div>
		)
	}

}

export default Notifications
