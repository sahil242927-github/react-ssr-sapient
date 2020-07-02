import 'babel-polyfill';
import express from 'express';

import renderer from './helper/renderer';
import createStore from './helper/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
