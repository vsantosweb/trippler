export default function cartReducer(state = false, action) {
    switch (action.type) {
        case 'SET_CART':
            return {
                ...state,
                ...action.cart,
            }
        default:
            break;
    }
    return state;
}