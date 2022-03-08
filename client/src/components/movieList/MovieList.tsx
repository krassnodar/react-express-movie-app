import {
  Wrapper
} from './movieList.style';

import MovieItem from '../movieItem/MovieItem';
import SearchMovieForm from '../searchMovieForm/SearchMovieForm';
import Pagination from '../pagination/Pagination';

import { useEffect, useState } from "react";
import { useActions} from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const MovieList = () => {

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [ isSearched, setIsSearched ] = useState(false);

  const { fetchMovies, searchMovies } = useActions();
  const { movies } = useTypedSelector(state => state.movies);

  useEffect(() => {
    isSearched ? searchMovies(query, page) : fetchMovies(page);
    // eslint-disable-next-line
  }, [page]);


  return (
    <>
      <SearchMovieForm 
        page={page}
        query={query}
        setQuery={setQuery}
        setPage={setPage}
        setIsSearched={setIsSearched}
        isSearched={isSearched}
      />
      <Wrapper>
        {movies.map(movie => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
            id={movie.id}
            overview={movie.overview}
            releaseYear={movie.release_date}
            backdrop_path={movie.backdrop_path}
          />
        ))}
        <Pagination 
          page={page}
          setPage={setPage}
        />
      </Wrapper>
    </>
  )
}

export default MovieList;