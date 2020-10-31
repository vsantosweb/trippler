export default function orderReducer(state = false, action) {
    switch (action.type) {
        case 'SET_ORDER':
            return {
                ...state,
                ...action.order,
            }
        case 'GET_ORDER':
            return {
                ...state,
                ...action.order,
            }
        default:
            break;
    }
    return state;
}