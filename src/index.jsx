import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import Root from './Root';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const store = configureStore();
const rootEl = document.getElementById('root');
ReactDOM.render(
    <Root store={store}/>,
    rootEl,
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
