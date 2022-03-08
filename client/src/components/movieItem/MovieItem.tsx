import {
  Wrapper,
  Title,
  Rating,
  Image
} from './movieItem.style';

import MovieModal from '../movieModal/MovieModal';
import { imageUrl200, posterUnavailable } from '../../config/imageUrl';
import { useState } from 'react';

interface IProps {
  title: string;
  rating: string;
  image: string;
  id: number;
  overview: string;
  releaseYear: string;
  backdrop_path: string;
}

const MovieItem = ({ title, rating, image, id, overview, releaseYear, backdrop_path }: IProps) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  return (
    <Wrapper onClick={() => setIsModalOpen(true)}>
      <Image src={image ? `${imageUrl200}/${image}` : posterUnavailable} alt='pic'/>
      <Title>
        {title}
      </Title>
      <Rating>
        {rating}
      </Rating>
      {isModalOpen &&
        <MovieModal 
          releaseYear={releaseYear}
          title={title}
          image={image}
          id={id}
          overview={overview}
          setIsModalOpen={setIsModalOpen}
          backdrop_path={backdrop_path}
        />
      }
    </Wrapper>
  )
}

export default MovieItem;