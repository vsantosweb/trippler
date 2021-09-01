import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import { SessionContext } from './session/SessionContext';

import website from './routes/website';


function makeRoutes(routes) {

    let routeList = [];

    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            routeList.push(routes[i][j])
        }
    }

    const RouteChildren = routeList.filter(route => route.children !== undefined).map(route => route.children);

    let childrenList = [];
    let allChildren = [];

    for (let i = 0; i < RouteChildren.length; i++) {
        for (let j = 0; j < RouteChildren[i].length; j++) {
            childrenList.push(RouteChildren[i][j])
        }
    }

    let mapChildren = (child) => {
        allChildren.push(child)
        child.children && child.children.forEach(mapChildren)
    }

    childrenList.forEach(mapChildren)

    return [...routeList.map(route => route), ...allChildren]

}

export const routes = makeRoutes([
    website
]);

function AppRoute({ isPrivate, path: path, ...rest }) {

    const { authenticated, rendering, verifyEmail } = React.useContext(SessionContext);

    
    // if (rendering) return null;

    // if (isPrivate && !authenticated) return <Redirect to={'/login'} />

    // if (authenticated && history.location.pathname == '/login') return <Redirect to={'/painel'} />


    // if (verifyEmail) {

    //     if (verifyEmail && history.location.pathname !== '/verify' ) return <Redirect to={'/verify'} />

    // }

    // if (!verifyEmail && authenticated) {

    //     if (history.location.pathname === '/verify' ) return <Redirect to={'/painel'} />

    // }
    return <Route {...rest} />

}


const AppRoutes = ({ setLayout, pageConfig }) => {

    return <Switch>
        {routes.map(ViewRoute =>
            <AppRoute
                key={ViewRoute.path}
                isPrivate={ViewRoute.private}
                exact={ViewRoute.exact}
                path={ViewRoute.path}
                render={(props) => <ViewRoute.component pageConfig={pageConfig} layout={setLayout} {...props} />}
            />
        )}
        <Route>Not found 404</Route>
    </Switch>
}


export default AppRoutes;
