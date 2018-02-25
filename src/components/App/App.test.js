import React from 'react'
import { mount } from 'enzyme'
import { App } from './App'
import { Blog } from '../Blog'

describe.only('<App />', () => {
	let app
	beforeAll(() => {
		app = mount(<App />)
	})

	it('does not display any blogs if user is not logged in', () => {
		app.update()
		expect(app.find(Blog).length).toEqual(0)
	})
})
