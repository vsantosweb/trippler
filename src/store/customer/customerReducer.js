export default function customerReducer(state = false, action) {

    switch (action.type) {
        case 'CUSTOMER_PROFILE':
            return {
                ...state,
                ...action.data,
            }

        
        default:
            break;
    }
    return state;
}