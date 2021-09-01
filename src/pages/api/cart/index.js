export async function add() {
    await api.post('/client/customer/carts', data).then(response => response.data)
}

export async function show() {
    await api.post('/client/customer/carts', data).then(response => response.data)
}

export async function update() {
    await api.patch('/client/customer/carts/' + cartSession, cartData).then(response => response.data)
}