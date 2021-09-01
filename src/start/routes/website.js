/*
|--------------------------------------------------------------------------
| Site Routes
|--------------------------------------------------------------------------
*/

import Home from "../../pages/Home";
import Trip from "../../pages/Trip";
import Filter from "../../pages/Filter";
import Checkout from "../../pages/Checkout";
import TripBag from "../../pages/TripBag";


export default [
    {
        path: '/',
        exact: true,
        title: 'Home',
        component: Home,
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
        exact: true,
        title: 'Home',
        component: TripBag,
        type: 'default',
        private: false
    },
    {
        path: '/checkout',
        exact: true,
        title: 'Checkout',
        component: Checkout,
        type: 'default',
        private: false
    },
    {
        path: '/filter',
        exact: true,
        title: 'Filter',
        component: Filter,
        type: 'default',
        private: false
    }

]
