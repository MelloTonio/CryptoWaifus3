import styled from 'styled-components';

export const FooterBase = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  position: relative;
  z-index: 9998 !important;
  width: 100%;
  background-image: linear-gradient(#aba7c950, #3e3b58);
  color: white;
  z-index: -1;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;
