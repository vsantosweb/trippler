import { trackPromise } from 'react-promise-tracker';
import api from '..';

export default function TripSchedule() {

    const index = (params = null, wait) => {

        const data = api.get('/trip-schedules')
            .then(response => response.data)
            .catch(error => error.response)

        return wait ? trackPromise(data, 'table-area') : data;

    }

    const show = (code, wait) => {

        const data = api.get('/trip-schedules/' + code)
            .then(response => response.data)
            .catch(error => error.response)
        return wait ? trackPromise(data, 'table-area') : data;

    }


    return { index, show }
}
