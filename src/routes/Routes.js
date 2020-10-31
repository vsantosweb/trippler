
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

import Home from "../resources/views/pages/Home";
import Trip from "../resources/views/pages/Trip";
import Cart from "../resources/views/pages/Cart";
import Filter from "../resources/views/pages/Filter";
import Checkout from "../resources/views/pages/Checkout";

const Routes = [
    {
        path: '/',
        exact: true,
        title: 'Home',
        component: Home,
        type: 'default',
        private: false
    },
    {
        path: '/trips/:code',
        exact: true,
        title: 'Home',
        component: Trip,
        type: 'default',
        private: false
    },
    {
        path: '/mochila',
        exact: false,
        title: 'Home',
        component: Cart,
        type: 'default',
        private: false
    },
    {
        path: '/checkout',
        exact: false,
        title: 'Checkout',
        component: Checkout,
        type: 'default',
        private: false
    },
    {
        path: '/filter',
        exact: false,
        title: 'Filter',
        component: Filter,
        type: 'default',
        private: false
    }
    
]
export default Routes;
