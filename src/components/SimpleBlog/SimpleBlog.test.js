import React from 'react'
import { shallow } from 'enzyme'
import { SimpleBlog } from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
	it('renders content', () => {
		const blog = {
			title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
			author: 'Matti',
			likes: 667,
			url: 'https://fullstack-hy.github.io/osa5/'
		}

		const blogComponent = shallow(<SimpleBlog blog={blog} />)
		const contentDiv = blogComponent.find('.content')

		expect(contentDiv.text()).toContain(blog.author)
		expect(contentDiv.text()).toContain(blog.title)
		expect(contentDiv.text()).toContain(blog.likes)
	})
})
