import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { addLocaleData } from 'react-intl';
import thunk from 'redux-thunk';
import csLocaleData from 'react-intl/locale-data/cs';
import skLocaleData from 'react-intl/locale-data/sk';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';
import frLocaleData from 'react-intl/locale-data/fr';
import { intl } from '../reducers/intlReducer';
import { profile } from '../reducers/profileReducer';
//import { mainPage } from '../reducers/mainPageReducer';
import initialState from './initialState';

/**
 * Configuration of store, reducers, middlewares, enhancers management.
 */
const configureStore = () => {
    const persistedState = initialState;

  const middlewares = [thunk];
  const enhancers = [];

  enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);

  const appReducers = combineReducers({
    intl,
    //mainPage,
    profile,
  });

  const store = createStore(
    appReducers,
    persistedState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );

  addLocaleData(csLocaleData);
  addLocaleData(skLocaleData);
  addLocaleData(enLocaleData);
  addLocaleData(deLocaleData);
  addLocaleData(frLocaleData);

  return store;
};

export default configureStore;
