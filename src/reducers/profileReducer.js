import { AUTHENTICATE } from '../actions/actionProfile';

export const profile = (state = { isLogged: true }, action) => {
  console.log(action);
  switch (action.type) {
    case AUTHENTICATE: {
      return Object.assign({}, state, { isLogged: action.payload });
    }
    default:
      return state;
  }
};