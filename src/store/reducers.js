import { combineReducers } from 'redux';

import cart from  './cart/cartReducer';
import customer from './customer/customerReducer';
export default combineReducers({
    cart,
    customer
})