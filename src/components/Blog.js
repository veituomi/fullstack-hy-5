import React from 'react'
import * as blogService from '../services/blogs'

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			expand: false,
			style: undefined,
			likes: props.blog.likes
		}
	}

	selectedStyle = {
		border: '1px solid black'
	}

	click = () => {
		this.setState({
			expand: !this.state.expand,
			style: this.state.expand ? undefined : this.selectedStyle
		})
	}

	like = (amount = 1) => {
		const likes = this.state.likes + amount
		blogService
			.update({
				...this.props.blog,
				likes
			})
			.then(blog => {
				this.setState({ likes })
			})
	}

	expanded = () => {
		if (this.state.expand) {
			return (
				<div>
					author: {this.props.blog.author}<br/>
					url: {this.props.blog.url}<br/>
					{this.state.likes} likes
					<button onClick={() => this.like(1)}>like</button>
					<button onClick={() => this.like(-1)}>dislike</button>
				</div>
			)
		}
	}

	render() {
		return (
			<div style={this.state.style}>
				<h2 onClick={this.click} style={{cursor: 'pointer'}}>{this.props.blog.title}</h2>
				{this.expanded()}
			</div>
		)
	}
}

export default Blog
