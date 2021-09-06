/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import styled from 'styled-components';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Main = styled.main`
    background-color: #0a0a0a;
    color: var(--white);
    padding-top: 50px;
    display:flex;
    justify-content: center;
    height: 920px;

`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
