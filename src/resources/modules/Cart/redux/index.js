
export default function CartReducer(state = {}, { payload, type }) {
    switch (type) {
        case 'ADD_TO_CART':
            return { ...state, ...payload }
        default:
            return state;
    }
}