import api from "../../../api";

export default async function Trips(request, response) {
    const { data } = await api.get('/client/public/trip/schedule/categories');
    response.json(data);
}

export async function createOrder(request) {

    const { data: data } = await api.post('/client/customer/orders', request).then(response => response.data);

    return { order: data.code }
}