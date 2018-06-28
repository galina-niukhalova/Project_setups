import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/App';
import RootReducer from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(RootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));