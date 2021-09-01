
import Cookie from 'js-cookie';
import axios from 'axios';

const baseURL = 'http://tripler/api/v1';
const api = axios.create({
    baseURL: baseURL,
});

if (Cookie.get('token')) {
    console.log('caralho!!!!!!', Cookie.get('token'))
    api.defaults.headers['Authorization'] = `Bearer ${Cookie.get('token')}`
}

export default api;