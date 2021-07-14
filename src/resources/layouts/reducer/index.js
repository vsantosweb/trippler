export default function LayoutReducer(state = [], action) {
    switch (action.type) {

        case 'SET_NAVBAR_THEME':

            return { ...state, navbarColor: action.payload };
        
        default:

            return state
    }
}