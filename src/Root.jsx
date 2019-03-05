import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import HotSwappingIntlProvider from './intl/ConnectedIntProvider';
import App from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    <HotSwappingIntlProvider {...store} >
      <Router>
        <App/>
      </Router>
    </HotSwappingIntlProvider>
  </Provider>
);

export default Root;