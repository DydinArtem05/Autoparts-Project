import axios from 'axios';
import {baseURL} from '../actions/config.js'

const href = baseURL + '/api';

export const $authApi = axios.create({
	baseURL: href + '/authentication',
});

export const $api = axios.create({
	baseURL: href,
});

$api.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});
