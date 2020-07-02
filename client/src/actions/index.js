import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_NEWS = 'fetch_news';

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const fetchNews = () => async (dispatch) => {
  const res = await axios.get(
    'https://hn.algolia.com/api/v1/search_by_date?tags=story'
  );

  dispatch({
    type: FETCH_NEWS,
    payload: res,
  });
};
