import { Router } from 'express';

import { ErrorHandler, validateTypes, validationHandler } from "../../utils";
import { movieController } from "./movie.controller";
import {
    updateMovieParamsSchema,
    updateMovieBodySchema,
    getMovieParamsSchema,
    saveMovieSchema,
} from "./movie.validator";

const movieRouter = Router();

movieRouter.get('/', ErrorHandler.wrap(movieController.getMovies));

movieRouter.post('/',
    validationHandler(saveMovieSchema, validateTypes.toBody),
    ErrorHandler.wrap(movieController.createMovie),
);

movieRouter.get('/:id',
    validationHandler(getMovieParamsSchema, validateTypes.toParams),
    ErrorHandler.wrap(movieController.getMovieById)
);

movieRouter.put('/:id',
    validationHandler(updateMovieParamsSchema, validateTypes.toParams),
    validationHandler(updateMovieBodySchema, validateTypes.toBody),
    ErrorHandler.wrap(movieController.updateMovieById)
);

export default movieRouter;
