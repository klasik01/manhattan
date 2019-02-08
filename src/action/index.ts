import _ from 'lodash';

export const fetchPost = () => async (dispatch, getState) => {
    await dispatch();

    _.chain(getState().posts)
        .map('');
};