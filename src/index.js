// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import reducer from './reducers'

const containerStyle = {
    height: "100%",
    width: "100%",
    position: "absolute"
};

const middleware = [ thunk ];
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

const application = (
    <Provider store={store}>
        <div style={containerStyle}>
            <App />
        </div>
    </Provider>
);

ReactDOM.render(application, document.getElementById('root'));

