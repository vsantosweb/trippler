export default function TripBagReducer(state = {}, {payload, type}) {

    switch (type) {
        case 'ADD_BAG':
            return { ...state, session: payload }
        default:
            return state;
    }
}