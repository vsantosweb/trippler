import { trackPromise } from 'react-promise-tracker';
import api from '..';
import ApiServer from '../../pages/api';

export default function CartApi() {

    const create = (request, wait) => {

        const data = api.post('/carts/create', request)
            .then(response => response.data)
            .catch(error => error.response)

        return wait ? trackPromise(data, 'table-area') : data;

    }

    const show = async ({req, res, query}) => {

        const { data } = await ApiServer(req).get('/client/customer/carts/' + query.session);
        
        return data;
    }


    return { create, show }
}
