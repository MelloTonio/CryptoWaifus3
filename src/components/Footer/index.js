/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FooterBase } from './styles';

import './Footer.css';

function Footer() {
  return (
    <FooterBase>
      <div className="icons">
        <div className="icon">
          <br />
          <a href="https://github.com/MelloTonio">
            <img
              className="img"
              height="40"
              src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Nano-icon.png"
              alt="Logo NANO"
            />
          </a>
          <h5 style={{ fontFamily: 'sans-serif' }}> © 2021 CryptoWaifu Inc </h5>
          <h5 style={{ fontFamily: 'sans-serif' }}>
            {' '}
            TIP US - NANO ADDRESS:
            nano_3hpo9b9wbsigowc4ibeq88ogph4umhgpqggn9m31agzawybpazzkn7dynnzh
          </h5>
        </div>
      </div>
    </FooterBase>
  );
}

export default Footer;
