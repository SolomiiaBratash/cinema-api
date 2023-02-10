import { Router } from'express';

import cinemaRouter from "../cinema/cinema.router";
import movieRouter from "../movie/movie.router";

export const apiRouter = Router();

apiRouter.use('/cinemas', cinemaRouter);
apiRouter.use('/movies', movieRouter);
