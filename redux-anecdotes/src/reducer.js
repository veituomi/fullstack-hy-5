const anecdotesAtStart = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0
	}
}

const initialState = anecdotesAtStart.map(asObject)

const actions = {
	'@@redux/INIT': state => state,
	vote: (state, action) => state.map(anecdote => ({
		...anecdote,
		votes : anecdote.votes + (anecdote.id === action.id ? 1 : 0)
	}))
}

const reducer = (state = initialState, action) => {
	return (actions[action.type] || (() => console.log(`Action ${action.type} is not defined!`)))(state, action)
}

export default reducer
