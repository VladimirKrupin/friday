import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Home from './components/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./reducers";


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
      <Home />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();