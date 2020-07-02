import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import Routes from '../../client/src/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <div className='App'>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // sending the javascript file so the browser will laod it on client side
  return `
    <html>
       <head><head>
       <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>

        <script src="bundle.js"></script>
       </body>
  `;
};
