import React from 'react';
import { renderRoutes } from 'react-router-config';

import Routes from './Routes';
import './App.css';

function App() {
  return <div className='App'>{renderRoutes(Routes)}</div>;
}

export default App;
