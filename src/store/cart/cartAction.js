import cookie from 'js-cookie';
import Cart from '../../api/Cart/Cart';

export const setCart = (cartData) => {

    Cart.add(cartData).then(response => {
        cookie.set('csid', response.data , {expires: 7});
    });

    return {
        type: 'SET_CART',
        cart: cartData
    }
}
export const updateCArt = (cartData, cartSession) => {

    Cart.update({cartData, cartSession});

    return {
        type: 'SET_CART',
        cart: cartData
    }
}
export const getCartSession = () => {

    let cartData = '';

     Cart.show(cookie.get('csid')).then(response => {
        cartData = response.data;
    });

    return {
        type: 'GET_CART',
        uid: cookie.get('csid')
    }
}
