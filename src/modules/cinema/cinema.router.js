import { Router } from 'express';

import { ErrorHandler, validateTypes, validationHandler } from "../../utils";
import { cinemaController } from "./cinema.controller";
import {
    updateCinemaParamsSchema,
    updateCinemaBodySchema,
    getCinemaParamsSchema,
    saveCinemaSchema,
} from "./cinema.validator";

const cinemaRouter = Router();

cinemaRouter.get('/', ErrorHandler.wrap(cinemaController.getCinemas));

cinemaRouter.post('/',
    validationHandler(saveCinemaSchema, validateTypes.toBody),
    ErrorHandler.wrap(cinemaController.createCinema)
);

cinemaRouter.get('/:id',
    validationHandler(getCinemaParamsSchema, validateTypes.toParams),
    ErrorHandler.wrap(cinemaController.getCinemaById)
);

cinemaRouter.put('/:id',
    validationHandler(updateCinemaParamsSchema, validateTypes.toParams),
    validationHandler(updateCinemaBodySchema, validateTypes.toBody),
    ErrorHandler.wrap(cinemaController.updateCinemaById)
);

export default cinemaRouter;
