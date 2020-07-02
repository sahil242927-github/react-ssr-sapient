import React from 'react';
//import { Route } from 'react-router-dom';

import Home from './components/Home';
import UsersList from './components/UsersList';

/* export default () => (
  <div>
    <Route exec path='/' component={Home} />
    <Route exec path='/hi' component={() => 'Hi'} />
    <Route exec path='/users' component={UsersList} />
  </div>
); */

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/users',
    component: UsersList,
  },
];
