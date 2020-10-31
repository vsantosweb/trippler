export default function customerReducer(state = false, action) {
    switch (action.type) {
        case 'CUSTOMER_PROFILE':
            return {
                ...state,
                ...action.data,
            }

        case 'GET_LOGGED_CUSTOMER':
        return {
            ...state,
            ...action.customerData
        }
        default:
            break;
    }
    return state;
}