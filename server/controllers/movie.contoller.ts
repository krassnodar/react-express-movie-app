import * as express from 'express';
import * as movieService from '../services/movie.service';

export const movieController = express.Router();

movieController.get('/', movieService.fetchMovies);
movieController.get('/search', movieService.searchMovies);
movieController.get('/actors/:id', movieService.fetchActors);


