import { createStore } from 'redux';

function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}

const store = createStore(playlist);


const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {
  list.innerHTML = '';
  trackInput.value = '';

  store.getState().forEach(track => {
    const li = document.createElement('li');
    li.textContent = track;
    list.appendChild(li);
  })
});

addTrackBtn.addEventListener('click', () => {
  if (trackInput.value.trim() === '') {
    return false;
  }
  store.dispatch({ type: 'ADD_TRACK', payload: trackInput.value });
});


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import './index.css';
// import Home from './components/Home/Home';
// import App from './components/App/App';
// import Dropdown from './components/Dropdown/Dropdown';
// import registerServiceWorker from './registerServiceWorker';
// import Header from "./components/Header/Header";
// import Menu from "./resourses/menu";
//
//
// const menu = Menu();

// ReactDOM.render(
//   <Router>
//     <div>
//       <Header menu={menu} />
//       <Route exact path="/" component={Home} />
//       <Route path="/app" component={App} />
//       <Route path="/dropdown" component={Dropdown} />
//     </div>
//   </Router>
//   , document.getElementById('root'));
// registerServiceWorker();
