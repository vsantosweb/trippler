import { trackPromise } from 'react-promise-tracker';
import api from '..';

export const tripScheduleList = (params = null, wait) => {

    const data = api.get('/client/public/trip/schedule/categories')
        .then(response => response.data)
        .catch(error => error.response)

    return wait ? trackPromise(data, 'table-area') : data;

}

export const tripScheduleShow = (code, wait) => {

    const data = api.get('/client/public/trip/schedule/' + code)
        .then(response => response.data)
        .catch(error => error.response)
    return wait ? trackPromise(data, 'table-area') : data;

}
