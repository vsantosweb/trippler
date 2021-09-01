/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

import Home from "../pages/Home";
import Trip from "../pages/Trip";
import TripBag from "../pages/TripBag";
import Filter from "../pages/Filter";
import Checkout from "../pages/Checkout";

const Routes = [{
        path: '/',
        exact: true,
        title: 'Home',
        component: Home,
        type: 'default',
        private: false
    },
    // {
    //     path: '/trips/:code',
    //     exact: true,
    //     title: 'Home',
    //     component: Trip,
    //     type: 'default',
    //     private: false
    // },
    {
        path: '/mochila',
        exact: false,
        title: 'Home',
        component: TripBag,
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