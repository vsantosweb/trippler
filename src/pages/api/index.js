
import Cookie from 'js-cookie';
import axios from 'axios';

export default function ApiServer(req) {

    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_URL_API,
    });

    if (req && req.cookies.token) {
        api.defaults.headers['Authorization'] = `Bearer ${req.cookies.token}`
    }
    
     return api;
}