import React from 'react';
import PropTypes from 'prop-types'

const actions = {
	create: (getName) => ({
		type: 'create',
		name: getName()
	}),
	vote: (id) => ({
		type: 'vote',
		id
	})
}

class App extends React.Component {
	handleChange = (event) => {
		this.setState({ newName: event.target.value })
	}

	constructor() {
		super()
		this.state = {
			newName: ''
		}
	}

	runAction(action) {
		this.context.store.dispatch(action)
	}

	render() {
		const anecdotes = this.context.store.getState() || []

		anecdotes.sort((a1, a2) => a2.votes - a1.votes)

		return (
			<div>
				<h2>Anecdotes</h2>
				{anecdotes.map(anecdote=>
					<div key={anecdote.id}>
						<div>
							{anecdote.content}
						</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => this.runAction(actions.vote(anecdote.id))}>vote</button>
						</div>
					</div>
				)}
				<h2>create new</h2>
				<div><input value={this.state.newName} onChange={this.handleChange} /></div>
				<button onClick={() => this.runAction(actions.create(() => this.state.newName))}>create</button>
			</div>
		)
	}

	static contextTypes = {
		store: PropTypes.object
	}
}

export default App
