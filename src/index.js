import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Home, AddTrack, reducer, Track, Tracks } from './routes';

import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}/>
      <Route path="/addtracks" component={AddTrack}/>
      <Route path="/tracks" component={Tracks}/>
      <Route path="/tracks/:id" component={Track}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);