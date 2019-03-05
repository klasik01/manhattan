export const AUTHENTICATE = 'AUTHENTICATE';

export function authenticate(isLogged) {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE, payload: isLogged});
  };
}