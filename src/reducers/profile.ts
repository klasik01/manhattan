import { FETCH_LOGIN_IN_OUT } from "src/action/types";

export default (state = [{ authState: 'undefined'}], action) => {
    switch(action.type) {
        case FETCH_LOGIN_IN_OUT:
            return Object.assign({}, state, {authState: action.payload});
        default:
            return state;
    }
};