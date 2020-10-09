import cookie from 'js-cookie';

export const setUserProfile = (customerData) => {
    return {
        type: 'CUSTOMER_PROFILE',
        data: customerData || false
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

