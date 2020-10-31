import cookie from 'js-cookie';

export const setOrder = (orderData) => {

    cookie.set('order', JSON.stringify(orderData), {expires: 7});
    return {
        type: 'SET_ORDER',
        order: orderData
    }
}

export const getOrder = () => {
    return {
        type: 'GET_ORDER',
        order: JSON.parse(cookie.get('order'))
    }
}
