import api from '..';

export default class TripSchedule{

    static list = async () => (
        await api.get('/client/public/trips/schedule').then(response => response.data)
    )

    static show = async (code) => (
        await api.get('/client/public/trips/schedule/' + code).then(response => response.data)
    )

    static additionalPackages = async (code) => (
        await api.get('/client/public/trips/additional-packages/' + code).then(response => response.data)
    )
}