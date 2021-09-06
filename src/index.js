/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import options from './components/Carousel/audioOptions';

import './index.css';

import Page404 from './pages/Page404';
import Home from './pages/Home/Home';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
