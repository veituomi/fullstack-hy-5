import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import { render } from './unicafe/unicafe'

/** Set to false to view unicafe */
if (true) {
	ReactDOM.render(<App />, document.getElementById('root'))
} else {
	render()
}
