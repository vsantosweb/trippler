import cookie from 'js-cookie';

export const setCart = (cartData) => {

    cookie.set('cart', JSON.stringify(cartData), {expires: 7});
    return {
        type: 'SET_CART',
        cart: cartData
    }
}

export const getCart = () => {
    return {
        type: 'GET_CART',
        cart: JSON.parse(cookie.get('cart'))
    }
}
// export const getUserProfile = () => {

//     return dispatch => {
//         getProfile().then(response => {
//             dispatch({
//                 type: 'GET_USER_PROFILE',
//                 userData: response
//             })
//         })

//     }
// }

