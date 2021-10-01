
import Cookie from 'js-cookie';
import axios from 'axios';

export default function ApiServer(req) {

    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });

    if (req.cookies.token) {
        api.defaults.headers['Authorization'] = `Bearer ${req.cookies.token}`
    }
    
     return api;
}