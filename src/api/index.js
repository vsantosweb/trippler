
import Cookie from 'js-cookie';
import axios from 'axios';

const baseURL = 'http://tripler.ws/api/v1';


const api = axios.create({
    baseURL: baseURL,
});

if (Cookie.get('token')) {
    api.defaults.headers['Authorization'] = `Bearer ${Cookie.get('token')}`
}


api.interceptors.request.use(function (config) {
    config.headers.Authorization =  `Bearer ${Cookie.get('token')}`;

    return config;
});

export default api;