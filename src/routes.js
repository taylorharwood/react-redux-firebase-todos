import React from 'react';
import { IndexRoute, Route } from 'react-router';
// Layouts
import AppLayout from './layouts/AppLayout.jsx';
import LoginLayout from './layouts/LoginLayout';
import RegisterLayout from './layouts/RegisterLayout';
import TodosLayout from './layouts/TodosLayout';

const routes = (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={LoginLayout} />
    <Route path="login" component={LoginLayout} />
    <Route path="register" component={RegisterLayout} />
    <Route path="todos" component={TodosLayout} />
  </Route>
);

export default routes;