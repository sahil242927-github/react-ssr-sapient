import { NEXT_PAGE, PREV_PAGE } from '../actions';

export default (currentPage = 1, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return currentPage + 1;

    case PREV_PAGE:
      return currentPage - 1;

    default:
      return currentPage;
  }
};
