import axios from "axios";
import { Request, Response } from 'express';
import { fetchMoviesUrl, searchMoviesUrl, apiKey, fetchActorsUrl } from '../constants/api';

// In real-world app I would wrap the business logic in try/catch so I can handle the errors

export const fetchMovies = async (req: Request, res: Response) => {
  const { data } = await axios.get(`${fetchMoviesUrl}?api_key=${apiKey}&page=${req.query.page}`);
  res.send(data);
};

export const searchMovies = async (req: Request, res: Response) => {
  const { data } = await axios.get(`${searchMoviesUrl}?api_key=${apiKey}&query=${req.query.query}&page=${req.query.page}`);
  res.send(data);
}

export const fetchActors = async (req: Request, res: Response) => {
  const { data } = await axios.get(`${fetchActorsUrl}/${req.params.id}/credits?api_key=${apiKey}`);
  res.send(data);
}
