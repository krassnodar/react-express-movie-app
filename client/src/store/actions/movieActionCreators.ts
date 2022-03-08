import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes, MovieActionsType } from '../reducers/types/movieTypes';

export const fetchMovies = (page: number) => {
  return async (dispatch: Dispatch<MovieActionsType>) => {
    try {
      dispatch({
        type: ActionTypes.FETCH_MOVIES
      })

      const res = await axios.get(
        `http://localhost:3002/api/movies?page=${page}`
      );

      dispatch({
        type: ActionTypes.FETCH_MOVIES_SUCCESS,
        payload: res.data.results
      })

    } catch(err: any) {
      console.log(err)

      dispatch({
        type: ActionTypes.FETCH_MOVIES_ERROR,
        payload: err?.response?.data?.message
      })
    }
  }
};

export const searchMovies = (query: string, page: number) => {
  return async (dispatch: Dispatch<MovieActionsType>) => {
    try {
      dispatch({
        type: ActionTypes.SEARCH_MOVIES
      })

      const res = await axios.get(
        `http://localhost:3002/api/movies/search?query=${query}&page=${page}`
      );

      dispatch({
        type: ActionTypes.SEARCH_MOVIES_SUCCESS,
        payload: res.data.results
      })

    } catch(err: any) {
      console.log(err)
      
      dispatch({
        type: ActionTypes.SEARCH_MOVIES_ERROR,
        payload: err?.response?.data?.message
      })
    }
  }
};
