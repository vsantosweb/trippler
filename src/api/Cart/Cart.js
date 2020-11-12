import api from '..';

export default class Cart{

    static add = async (data) => (
        await api.post('/client/customer/carts', data).then(response => response.data)
    )

    static show = async (session_id) => (
        await api.get('/client/customer/carts/' + session_id).then(response => response.data)
    )

    static update = async (cartData,cartSession) => (
        await api.patch('/client/customer/carts/' + cartSession, cartData).then(response => response.data)
    )

}