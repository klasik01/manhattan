import {
    AUTHENTICATE,
    FETCH_PROFILE_ERROR,
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_SUCCESS
} from '../actions/actionProfile';

export const profile = (state = {isLogged: true, loading: true, profile: {}}, action) => {
    switch (action.type) {
        case AUTHENTICATE: {
            return Object.assign({}, state, {isLogged: action.payload});
        }
        case FETCH_PROFILE_PENDING: {
            return Object.assign({}, state, {loading: true});
        }
        case FETCH_PROFILE_SUCCESS: {
            return Object.assign({}, state, {loading: false, profile: action.payload})
        }
        case FETCH_PROFILE_ERROR: {
            return Object.assign({}, state, {loading: false, profile: undefined});
        }

        default:
            return state;
    }
};