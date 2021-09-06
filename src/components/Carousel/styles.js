import styled from 'styled-components';

export const Title = styled.h3`
  margin-left: 10px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Red Rose', cursive;
  font-size: 24px;
  border-bottom: 2px solid white;
  background-color: rgba(70, 45, 60, 0.6);
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 10px;
  line-height: 1;
  border-radius: 4px;
  margin-top: 10px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 5px;
    text-align: center;
    background-color: rgba(46, 49, 49, 0.6);
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  color: wheat;
  text-decoration: none;
  border-bottom: 1px solid white;
  border-radius: 5px;
  font-size: 18px;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;


export const VideoCardGroupContainer = styled.section`
  border: 1px solid transparent;
  color: white;
  background-color: #141414;
  background: fade(blue, 100%);
  min-height: 197px;
  border-bottom: 8px solid black;
`;

