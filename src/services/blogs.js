import axios from 'axios'
import * as loginService from './login'
const baseUrl = 'http://localhost:3003/api/blogs'

export const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

export const create = (data) => {
	const header = `Bearer ${loginService.getUser().token}`
	const request = axios.post(baseUrl, data, {
		headers: { Authorization: header }
	})
	return request.then(response => response.data)
}
