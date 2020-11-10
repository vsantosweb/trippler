import api from '..';

export default class Payment{

    static create = async (data) => (
        await api.post('/client/customer/purchase-order', data).then(response => response.data)
    )
}