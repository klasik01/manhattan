import _ from 'lodash';
import thunk from 'redux-thunk';
import { timeout } from 'src/api/rest';
import { FETCH_LOGIN_LOADING, FETCH_LOGIN_IN_OUT } from './types';

export const fetchPost = () => async (dispatch, getState) => {
    await dispatch();

    _.chain(getState().posts)
        .map('');
};


export function setSignInOutApp(value) {
    return dispatch => {
        dispatch({ type: FETCH_LOGIN_IN_OUT, value});
    }
}