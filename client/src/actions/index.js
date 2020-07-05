import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_NEWS = 'fetch_news';
export const PREV_PAGE = 'prev_page';
export const NEXT_PAGE = 'next_page';

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const fetchNews = (page) => async (dispatch) => {
  const res = await axios.get(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=10`
  );

  dispatch({
    type: FETCH_NEWS,
    payload: res,
  });
};

export const prevAction = (page) => {

  const res = await axios.get(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=10`
  );

  dispatch({
    type: PREV_PAGE,
    payload: res,
  });
};
export const nextAction = (page) => {

  const res = await axios.get(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=10`
  );

  dispatch({
    type: NEXT_PAGE,
    payload: res,
  });
};

