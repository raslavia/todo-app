import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from "./containers/app-comments.js";
import {createStore} from 'redux'; 
import comments from './reducers/index.js';

import { loadState, saveState } from "./storage";

const persistedState = loadState();

const store = createStore(comments, persistedState);

store.subscribe(() => {
  saveState({
    comments: store.getState().comments
  });
});

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));