/*import { MAINPAGE_FETCH_ERROR, MAINPAGE_FETCH_PENDING, MAINPAGE_FETCH_SUCCESS } from '../actions/actionMainPage';

export const mainPage = (state = { isLoading: true, homeData: {}}, action) => {
  switch (action.type) {
    case MAINPAGE_FETCH_PENDING:
      return Object.assign({}, state, { isLoading: true, homeData: undefined });
    case MAINPAGE_FETCH_SUCCESS: {
      const  homeData  = action.payload;
      return Object.assign({}, state, { isLoading: false, homeData: homeData});
    }
    case MAINPAGE_FETCH_ERROR: {
      return Object.assign({}, state, { isLoading: false, homeData: undefined  });
    }
    default:
      return state;
  }
};*/

