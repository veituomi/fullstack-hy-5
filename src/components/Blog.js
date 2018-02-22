import React from 'react'

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			expand: false,
			style: undefined
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

	expanded = () => {
		if (this.state.expand) {
			return (
				<div>
					author: {this.props.blog.author}<br/>
					url: {this.props.blog.url}<br/>
					{this.props.blog.likes} likes
				</div>
			)
		}
	}

	render() {
		return (
			<div style={this.state.style} onClick={this.click}>
				<h2>{this.props.blog.title}</h2>
				{this.expanded()}
			</div>
		)
	}
}

export default Blog
