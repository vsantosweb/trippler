import { combineReducers } from 'redux';

import cart from  './cart/cartReducer';
import customer from './customer/customerReducer';
import order from './order/orderReducer';

export default combineReducers({
    cart,
    customer,
    order
})