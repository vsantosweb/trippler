
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

import Home from "../resources/views/pages/Home";
import Trip from "../resources/views/pages/Trip";
import Checkout from "../resources/views/pages/Checkout";
import Filter from "../resources/views/pages/Filter";

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
        exact: false,
        title: 'Home',
        component: Trip,
        type: 'default',
        private: false
    },
    {
        path: '/checkout',
        exact: false,
        title: 'Home',
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
