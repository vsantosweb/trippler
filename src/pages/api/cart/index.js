import api from "../../../api"

export async function createCart(data) {
    return await api.post('/client/customer/carts', data).then(response => response.data);
}

export async function getCart(session) {
    return await api.get('/client/customer/carts/'+session).then(response => response.data).catch(error => error.response);
}

export async function update() {
    await api.patch('/client/customer/carts/' + cartSession, cartData).then(response => response.data);
}