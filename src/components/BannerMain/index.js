/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
} from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
}

export default function BannerMain({ videoTitle, videoDescription, url }) {
  const youTubeID = getYouTubeId(url);
  // const bgUrl = `https://img.youtube.com/vi/${youTubeID}/hqdefault.jpg`;
  const bgUrl = 'http://i.imgur.com/Fb37U.jpg';
  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>
          <ContentAreaContainer.Description>
            <h3>{videoDescription}</h3>
            <br />
            1.Only Shallow
            <br />
            2.Loomer
            <br />
            3.Touched
            <br />
            4.To Here Knows When
            <br />
            5.When You Sleep
            <br />
            6.I Only Said
            <br />
            7.Come in Alone
            <br />
            8.Sometimes
            <br />
            9.Blown A Wish
            <br />
            10.What You Want
            <br />
            11.Soon
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <WatchButton>
            <a href="https://youtu.be/OrMjc4oz0mY">Assistir</a>
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
