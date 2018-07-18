import {
  Welcome, WelcomeV2, Game, GameV2, Compose, Solo, Account, Replay, ReplaySolo, Room, Replays, Play
} from './pages/index';

import ReactDOM from 'react-dom';
import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './style.css';

ReactDOM.render(
  <Router>
    <div className='router-wrapper'>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/game/:gid" component={Game}/>
      <Route exact path="/room/:rid" component={Room}/>
      <Route exact path="/room/:rid/:gid" component={Room}/>
      <Route exact path="/replay/:gid" component={Replay}/>
      <Route exact path="/replay/solo/:uid/:pid" component={ReplaySolo}/>
      <Route exact path="/replays/:pid" component={Replays}/>
      <Route exact path="/game/solo/:pid" component={Solo}/>
      <Route exact path="/beta" component={WelcomeV2}/>
      <Route exact path="/beta/game/:gid" component={GameV2}/>
      <Route exact path="/beta/play/:pid" component={Play}/>
      <Route path="/puzzle/:pid" component={Solo}/>
      <Route path="/account" component={Account}/>
      <Route exact path="/compose" component={Compose}/>
    </div>
  </Router>,
  document.getElementById('root')
);

