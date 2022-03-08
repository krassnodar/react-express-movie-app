import * as express from 'express';
import { movieController } from './movie.contoller';

export const router = express.Router();

router.use('/movies', movieController);