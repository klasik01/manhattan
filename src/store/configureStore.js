import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { addLocaleData } from 'react-intl';

import csLoaderData from 'react-intl/locale-data/cs';
import enLoaderData from 'react-intl/locale-data/en';
import skLoaderData from 'react-intl/locale-data/sk';
import { intl } from '../reducers/intlReducer';
import initialState from './initialState';
import thunk from "redux-thunk";
import {profile} from "../reducers/profileReducer";

const configureStore = () => {
    const persistedState = initialState;

    const middlewares = [thunk];
    const enhancers = [];

    //enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);

    const appReducers = combineReducers({
        intl,
        profile
    });

    const store = createStore(
        appReducers,
        persistedState,
        compose(applyMiddleware(...middlewares), ...enhancers)
    );

    addLocaleData(csLoaderData);
    addLocaleData(enLoaderData);
    addLocaleData(skLoaderData);

    return store;
};

export default configureStore;
