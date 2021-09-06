import Carousel from 'react-spring-3d-carousel';
import React, { useState, useEffect } from 'react';
import { config } from 'react-spring';

import './carousel.css';

export default function Carroussel(props) {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);

  const [cards] = useState(props.table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div className="wrapper">
      <div
        style={{ width: 800, height: props.height, marginLeft: 1100 }}
        className="carrousel"
      >
        <Carousel
          slides={cards}
          goToSlide={props.goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
}
