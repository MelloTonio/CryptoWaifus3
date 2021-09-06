/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import './Carousel.css';

import { VideoCardGroupContainer, Title } from './styles';

import Slider, { SliderItem } from './components/Slider';
import VideoCard from './components/VideoCard';

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const { musicas } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <div className="fuckAlura">
          <>
            <Title style={{ backgroundColor: 'none' }}>
              <div className="titleHelper">{categoryTitle}</div>
            </Title>
          </>
        </div>
      )}

      <Slider>
        {musicas && musicas.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.nome}>
              <div className="box">
                <VideoCard
                  videoTitle={video.nome}
                  videoURL={video.url}
                  categoryColor={categoryColor}
                />
                <div className="tracks">{video.nome}</div>
              </div>
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
