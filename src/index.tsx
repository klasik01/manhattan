import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render (
    <Provider store={store}>
        <BrowserRouter>
            <App color="Blue" />
        </BrowserRouter>    
    </Provider>
    ,
    document.getElementById("root")
);