
import Cookie from 'js-cookie';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const api = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: 'Bearer ' + Cookie.get('UID')
    }
});

api.interceptors.request.use((config) =>
{
    config.headers.Authorization = 'Bearer ' + Cookie.get('UID');
    return config;
},
    error => Promise.reject(error)
);

export default api;