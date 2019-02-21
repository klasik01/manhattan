import {AUTHENTICATE} from "../actions/types";

export const profile = (state = { isLogged: false}, action) => {
    switch(action.type) {
        case AUTHENTICATE: {
            return Object.assign({}, state, { isLogged: action.payload});
        }
        default:
            return state;
    }
};