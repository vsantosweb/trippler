import { trackPromise } from 'react-promise-tracker';
import api from '..';

export default function TripResource() {

    const index = (params = null, wait) => {

        const data = api.get('/client/public/trip/schedule/categories')
            .then(response => response.data)
            .catch(error => error.response)

        return wait ? trackPromise(data, 'table-area') : data;

    }

    const tripScheduleShow = (code, wait) => {

        const data = api.get('/trips/' + code)
            .then(response => response.data)
            .catch(error => error.response)
        return wait ? trackPromise(data, 'table-area') : data;

    }
}
