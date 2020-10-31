import api from '../';
import Cookie from 'js-cookie';

export default class Authenticate {

    constructor(credentials) {

        this.message = [];
        this.credentials = credentials;
        this.token = null;
        this.auth = null;
        this.userData = null;

    }

    userdata = {};

    static signIn = (credentials) => {

        return  api.post('/client/customer/auth/login', credentials)
        .then(response => {

            Cookie.set('UID', response.data.data)
            return response;

        })
        .catch(error => {
            return error.response.data;
        });
    }

    static signOut = async () => {

        await api.post('/store/logout').then(() => {

            Cookie.remove('UID');
            return this.isAuthorized = false;

        }).catch((error) => {

            if (error) {
                return false;
            }
        });

        return window.location.href = "/login";
    }


    static logged = async () => {

        return await api.get('/client/customer/auth/logged').then((response) => {
            switch (response.status) {
                case 200:
                    this.isAuthorized = true;
                    return this.userData = response.data.data;
                case 401:
                    this.isAuthorized = false;
                    return window.location.href = '/login';
                case 500:
                    this.isAuthorized = false;
                    return window.location.href = '/login';
                default:
                    break;
            }
            this.setResponseMessage(response.data.message);

        }).catch((error) => {

            // this.responseCode(error.response.status);
            // this.setResponseMessage(error.response.data.message);

        });
    }
    static authorized = () => {

        return this.isAuthorized;
    }
    static getUser = () => {
        return this.userData;
    }
}