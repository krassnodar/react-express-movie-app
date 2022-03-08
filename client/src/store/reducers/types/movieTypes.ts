export interface IMovie {
  id: number;
  title: string;
  vote_average: string;
  poster_path: string;
  release_date: string;
  overview: string;
  backdrop_path: string;
}

export interface IInitialState {
  loading: boolean;
  error: string | null;
  movies: IMovie[];
  isSearched: boolean;
}


export enum ActionTypes {
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
  SEARCH_MOVIES = 'SEARCH_MOVIES',
  SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR',
}

interface IFetchMovie {
  type: ActionTypes.FETCH_MOVIES
}

interface IFetchMovieSuccess {
  type: ActionTypes.FETCH_MOVIES_SUCCESS,
  payload: IMovie[]
}

interface IFetchMovieError {
  type: ActionTypes.FETCH_MOVIES_ERROR,
  payload: string
}

interface ISearchMovies {
  type: ActionTypes.SEARCH_MOVIES
}

interface ISearchMoviesSuccess {
  type: ActionTypes.SEARCH_MOVIES_SUCCESS,
  payload: IMovie[]
}

interface ISearchMoviesError {
  type: ActionTypes.SEARCH_MOVIES_ERROR,
  payload: string
}




export type MovieActionsType = IFetchMovie | IFetchMovieSuccess | 
IFetchMovieError | ISearchMovies | ISearchMoviesSuccess | ISearchMoviesError