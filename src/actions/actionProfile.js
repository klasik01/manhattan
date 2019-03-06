import {loadProfile} from "../api/rest";
import {extractErrorText} from "./actionUtils";
import {errorAlert} from "./alertActions";

export const AUTHENTICATE = 'AUTHENTICATE';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR';

export function authenticate(isLogged) {
    return (dispatch) => {
        dispatch({type: AUTHENTICATE, payload: isLogged});
    };
};

export function fetchProfileData(username) {
    return (dispatch) => {
        dispatch({type: FETCH_PROFILE_PENDING});

        return loadProfile().then(
            (result) => dispatch({type: FETCH_PROFILE_SUCCESS, payload: result}),
            (error) => {
                const text = extractErrorText(error, 'Cannot reach Backend');
                dispatch({type: FETCH_PROFILE_ERROR});
                dispatch(errorAlert(text));
            }
        )
    };
}

