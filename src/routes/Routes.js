
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

import Home from "../resources/views/pages/Home";
import Trip from "../resources/views/pages/Trip";

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
        path: '/trip',
        exact: false,
        title: 'Home',
        component: Trip,
        type: 'default',
        private: false
    }
]
export default Routes;
