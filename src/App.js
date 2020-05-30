import React from 'react';

import { Button } from 'antd';
import Routes from './routes/Routes';
import { Route, Switch, BrowserRouter, useHistory } from 'react-router-dom';
const history = useHistory;
function App() {

  const routes = () => (

    Routes.map((route, key) => {
      return <Route exact={route.exact} path={route.path} component={route.component} key={key} />
    })
  )
  return (
    <BrowserRouter history={history}>
      <Switch>
        {routes()}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
