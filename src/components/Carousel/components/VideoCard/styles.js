import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid rgb(179, 0, 71);
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity 0.3s, width 0.3s, box-shadow 0.5s, height 0.3s;

  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.56);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.56);


  &:hover,
  &:focus {
    opacity: 0.5;
    width: 320px;
    height: 208px;
    border: 2px solid white;
    -webkit-box-shadow: 14px 14px 17px 1px rgba(0,0,0,0.98);
    -moz-box-shadow: 14px 14px 17px 1px rgba(0,0,0,0.98);
    box-shadow: 14px 14px 17px 1px rgba(0,0,0,0.98);
    
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
