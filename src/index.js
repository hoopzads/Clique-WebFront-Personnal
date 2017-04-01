import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';

import rootReducer from './reducers/index';

let DEBUG = true;
let middlewares = [DEBUG && logger, thunk].filter(Boolean);

//Currently there is a problem with redux-promise

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export const myStore = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
  document.getElementById('root')
);
