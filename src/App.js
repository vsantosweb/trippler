import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Routes from './routes/Routes';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import SiteLayout from './resources/views/layouts/SiteLayout';
import Authenticate from './api/Auth/Athenticate';
import { setUserProfile } from './store/customer/customerAction';

export default function App() {

  const [logged, setLogged] = useState(false);
  const [rendered, setRendered] = useState(false);
  const dispatch = useDispatch();

  const Layout = SiteLayout;

  const privateRoutes = Routes.map((route) => route.private && logged ? <Route key={route.path} exact={route.exact} path={route.path} component={route.component} /> : null);
  const publicRoutes = Routes.map((route) => !route.private && route.type !== 'auth' && route.type !== 'error' ? <Route key={route.path} exact={route.exact} path={route.path} component={route.component} /> : null);
  const authRoutes = Routes.map(route => route.type === 'auth' ? <Route path={route.path} component={route.component} key={route.path} /> : null);
  const errorRoutes = Routes.map(route => route.type === 'error' ? <Route path={route.path} component={route.component} key={route.path} /> : null);
  
  const redirectTo = (path) => {
    return <Redirect key={path} to={{ pathname: path }} />
  }

  useEffect(() => {

    Authenticate.logged().then(() => {

      if (Authenticate.authorized()) {
        dispatch(setUserProfile(Authenticate.getUser()));
        setLogged(true);
        setRendered(true);

        return;
      }
      setLogged(false);
      setRendered(true);
    });

  })

  return (
    <BrowserRouter>
      <Layout logged={logged}>
        <Switch>
          {publicRoutes}
          {authRoutes}
          {privateRoutes}
          {errorRoutes}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

