import {
  ActionTypes, IInitialState, MovieActionsType
} from './types/movieTypes';


const initialState = {
  loading: false,
  error: null,
  movies: [],
  isSearched: false
};

export const movieReducer = (state: IInitialState = initialState, action: MovieActionsType):IInitialState => {
  switch(action.type) {
    case ActionTypes.FETCH_MOVIES:
      return {
        ...state, loading: true, isSearched: false
      }
    case ActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        error: null, loading: false, movies: action.payload, isSearched: false
      }
    case ActionTypes.FETCH_MOVIES_ERROR:
      return {
        ...state, loading: false, error: action.payload, isSearched: false
      }
    case ActionTypes.SEARCH_MOVIES:
      return {
        ...state, loading: true, isSearched: true
      }
    case ActionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        loading: false, error: null, movies: action.payload, isSearched: true
      }
    case ActionTypes.SEARCH_MOVIES_ERROR:
      return {
        ...state, loading: false, error: action.payload
      }
    default:
      return state
  }
}