import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  users: usersReducer,
  news: newsReducer,
});
