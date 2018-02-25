const blogs = [
	{
		author: 'Matti',
		title: 'Matti & Teppo',
		likes: 0,
		url: ''
	},
	{
		author: 'Teppo',
		title: 'Teppo & Matti',
		likes: 1,
		url: ''
	}
]

export const getAll = () => Promise.resolve(blogs)
