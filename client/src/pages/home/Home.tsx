import {
  Wrapper,
  Text,
} from './home.style';

import MovieList from '../../components/movieList/MovieList';

const Home = () => {
  return (
    <Wrapper>
      <Text>
        TOP 20 MOVIES
      </Text>
      <MovieList />
    </Wrapper>
  )
}

export default Home;