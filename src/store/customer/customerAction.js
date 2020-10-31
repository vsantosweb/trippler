import cookie from 'js-cookie';
import Authenticate from '../../api/Auth/Athenticate';

export const setCustomerProfile = (customerData) => {
    return {
        type: 'CUSTOMER_PROFILE',
        data: customerData
    }
}

export const getCustomerProfile = () => {

    return dispatch => {
         Authenticate.logged().then(response => {
            dispatch({
                type: 'GET_LOGGED_CUSTOMER',
                customerData: response
            })
        })
    }
}

