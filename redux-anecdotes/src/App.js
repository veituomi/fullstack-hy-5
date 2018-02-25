import React from 'react';
import PropTypes from 'prop-types'

const actions = {
	vote: (id) => ({
		type: 'vote',
		id
	})
}

class App extends React.Component {
	runAction(action) {
		this.context.store.dispatch(action)
	}

	render() {
		const anecdotes = this.context.store.getState() || []

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
				<form>
					<div><input /></div>
					<button>create</button> 
				</form>
			</div>
		)
	}

	static contextTypes = {
		store: PropTypes.object
	}
}

export default App
