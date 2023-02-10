import httpStatus from "http-status";

import { CinemaService } from "./cinema.service";
import {ERROR_MESSAGES, ErrorProvider} from "../../utils";

class CinemaController {
    async getCinemas(req, res) {
        const cinemas = await new CinemaService().getCinemas();

        res.status(httpStatus.OK).json({ data: cinemas });
    }

    async getCinemaById(req, res) {
        const { id } = req.params;

        const createdCinema = await new CinemaService().getCinemaById(id);

        res.status(httpStatus.OK).json({ data: createdCinema });
    }

    async createCinema(req, res) {
        const data = req.body;

        const createdCinema = await new CinemaService().createCinema(data);

        res.status(httpStatus.OK).json({ data: createdCinema });
    }

    async updateCinemaById(req, res, next) {
        const { id } = req.params;
        const data = req.body;

        const cinemaService = new CinemaService()
        const foundCinema = await cinemaService.getCinemaById(id);

        if(!foundCinema) {
            return next(new ErrorProvider(ERROR_MESSAGES.CINEMA_NOT_FOUND, httpStatus.BAD_REQUEST))
        }

        const createdCinema = await cinemaService.updateCinema(id, data);

        res.status(httpStatus.OK).json({ data: createdCinema });
    }
}

export const cinemaController = new CinemaController();
