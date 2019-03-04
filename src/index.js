import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App';
import rootReducers from './reducers';
import './index.css';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware()) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

