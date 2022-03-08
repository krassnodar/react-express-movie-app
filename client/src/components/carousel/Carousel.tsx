import {
  Wrapper,
  Image
} from './carousel.style';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { imageUrl200, noPicture } from '../../config/imageUrl';

interface IProps {
  id: number;
};

interface IActor {
  name: string;
  profile_path: string;
};

const Carousel = ({ id }: IProps) => {

  const [actors, setActors] = useState([]);

  const handleDragStart = (e: React.MouseEvent) => e.preventDefault();
  
  const fetchActors = async () => {
    const res = await axios.get(
      `http://localhost:3002/api/movies/actors/${id}`
    );
    setActors(res.data.cast);
  };

  useEffect(() => {
    fetchActors();
    // eslint-disable-next-line
  }, []);



  const items = actors.map((actor: IActor) => {
    return (
      <Wrapper>
        <Image
          src={actor.profile_path ? `${imageUrl200}/${actor.profile_path}` : `${noPicture}`}
          alt={actor?.name}
          onDragStart={handleDragStart}
        />
        <b>{actor?.name}</b>
      </Wrapper>
    )
  });

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  return (
    <>
      <AliceCarousel 
        mouseTracking
        infinite
        disableDotsControls
        disableButtonsControls
        items={items}
        autoPlay
        responsive={responsive}
      />
    </>
  )
}

export default Carousel;