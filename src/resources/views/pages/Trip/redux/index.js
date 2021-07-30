export default function TripCartReducer(state = {}, action){
        
    switch (action.type) {
        case 'ADD_CART':
            return { ...state, cart: action.payload }
        default:
            return state;
    }
}