import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import * as Actions from '../client/src/actions';

const mockStore = configureMockStore([thunkMiddleware]);

if (
  ('should create an action to fetch news',
  () => {
    const store = mockStore();
    store.dispatch(Actions.fetchNews());
    const action = store.getActions();
    console.log('Testing Action: ', action);

    const expectedAction = {
      type: Actions.FETCH_NEWS,
    };

    expect(action[0]).toEqual(expectedAction);
  })
);
