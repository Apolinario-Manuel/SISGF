import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Admin from './pages/Admin';
import NewOffice from './pages/NewOffice';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />

        <Route path="/admin" component={Admin} />
        <Route path="/office/new" component={NewOffice} />
      </Switch>
    </BrowserRouter>
  );
}