import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './reducer'

class Statistiikka extends React.Component {

	render() {
		const { good, ok, bad } = this.context.store.getState()
		const palautteita = good + ok + bad
		const keskiarvo = palautteita > 0 ? (good - bad) / palautteita : 0
		const positiivisia = good + ok

		if (palautteita === 0) {
			return (
				<div>
					<h2>statistiikka</h2>
					<div>ei yhtään palautetta annettu</div>
				</div>
			)
		}

		const clear = () => this.context.store.dispatch({ type: 'ZERO' })

		return (
			<div>
				<h2>statistiikka</h2>
				<table>
					<tbody>
						<tr>
							<td>hyvä</td>
							<td>{good}</td>
						</tr>
						<tr>
							<td>neutraali</td>
							<td>{ok}</td>
						</tr>
						<tr>
							<td>huono</td>
							<td>{bad}</td>
						</tr>
						<tr>
							<td>keskiarvo</td>
							<td>{keskiarvo}</td>
						</tr>
						<tr>
							<td>positiivisia</td>
							<td>{positiivisia}</td>
						</tr>
					</tbody>
				</table>

				<button onClick={clear}>nollaa tilasto</button>
			</div >
		)
	}

	static contextTypes = {
		store: PropTypes.object
	}
}

export class App extends React.Component {
	klik = (nappi) => () => {
		this.context.store.dispatch(
			{
				type: nappi
			}
		)
	}

	render() {
		return (
			<div>
				<h2>anna palautetta</h2>
				<button onClick={this.klik('GOOD')}>hyvä</button>
				<button onClick={this.klik('OK')}>neutraali</button>
				<button onClick={this.klik('BAD')}>huono</button>
				<Statistiikka />
			</div>
		)
	}

	static contextTypes = {
		store: PropTypes.object
	}
}

const store = createStore(counterReducer)

export const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'))
}

store.subscribe(render)
