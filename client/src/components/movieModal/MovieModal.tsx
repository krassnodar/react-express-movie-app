import {
  Wrapper,
  ModalContent,
  LandscapeImage,
  PortraitImage,
  MovieInfo,
  Description,
  Title
} from './movieModal.style';

import { imageUrl500, posterUnavailable } from '../../config/imageUrl';
import Carousel from '../carousel/Carousel';

interface IProps {
  title: string;
  image: string;
  id: number;
  overview: string;
  releaseYear: string;
  setIsModalOpen: (state: boolean) => void;
  backdrop_path: string;
}

const MovieModal = ({ title, image, id, overview, setIsModalOpen, releaseYear, backdrop_path }: IProps) => {

  return (
    <Wrapper onClick={(e: React.MouseEvent) => {
      e.stopPropagation();
      setIsModalOpen(false);
    }}>
      <ModalContent onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}>
        <LandscapeImage src={image ? `${imageUrl500}/${backdrop_path}` : posterUnavailable} alt='pic' />
        <PortraitImage src={image ? `${imageUrl500}/${image}` : posterUnavailable} alt='pic' />
        <MovieInfo>
          <Title>
            {title} {releaseYear && releaseYear.slice(0, 4)}
          </Title>
          <Description>
            {overview}
          </Description>
          <div>
            <Carousel 
              id={id}
            />
          </div>
        </MovieInfo>
      </ModalContent>
    </Wrapper>
  )
}

export default MovieModal;