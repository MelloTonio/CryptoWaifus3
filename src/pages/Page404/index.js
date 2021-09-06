/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import styles from './Page404.css';

import neverGGYU from '../../musics/nggup.mp3';
import Multiplayer from '../../components/Multiplayer';

import PageDefault from '../PageDefault';

const musics = [neverGGYU];

const Page404 = () => (
  <PageDefault>
    <div className="container">
      <div className="Description">
        <div>
          <h1 className="text">Sorry, this page doesn't exist :(</h1>
        </div>
      </div>
      <div className="error404">
        <div className="image">
          <img src="https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif" />
        </div>
      </div>
      <div className="playButton">
        <Multiplayer urls={musics} />
      </div>
    </div>
  </PageDefault>
);

export default Page404;
