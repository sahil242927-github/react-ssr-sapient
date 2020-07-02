import React, { useEffect } from 'react';

//import { Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import UsersList from '../pages/UsersList';

/* export default () => (
  <div>
    <Route exec path='/' component={Home} />
    <Route exec path='/hi' component={() => 'Hi'} />
    <Route exec path='/users' component={UsersList} />
  </div>
); */

export default [
  {
    ...UsersList,
    path: '/users',
  },
  {
    ...Home,
    exact: true,
  },
];
