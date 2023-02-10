import httpStatus from "http-status";

import { MovieService } from "./movie.service";
import {ERROR_MESSAGES, ErrorProvider} from "../../utils";
import {CinemaService} from "../cinema/cinema.service";

class MovieController {
    async getMovies(req, res) {
        const cinemas = await new MovieService().getMovies();  // todo service join cinema

        res.status(httpStatus.OK).json({ data: cinemas });
    }

    async getMovieById(req, res) {
        const { id } = req.params;

        const createdMovie = await new MovieService().getMovieById(id); // todo service join cinema

        res.status(httpStatus.OK).json({ data: createdMovie });
    }

    async createMovie(req, res) {
        const data = req.body;

        const createdMovie = await new MovieService().createMovie(data);

        res.status(httpStatus.OK).json({ data: createdMovie });
    }

    async updateMovieById(req, res, next) {
        const { id } = req.params;
        const data = req.body;

        const movieService = new MovieService();
        const foundMovie = await movieService.getMovieById(id);

        if (!foundMovie) {
            return next(new ErrorProvider(ERROR_MESSAGES.MOVIE_NOT_FOUND, httpStatus.BAD_REQUEST));
        }

        if (data.cinemaId) {
            const foundCinema =  await new CinemaService().getCinemaById(data.cinemaId);

            if (!foundCinema) {
                return next(new ErrorProvider(ERROR_MESSAGES.CINEMA_NOT_FOUND, httpStatus.BAD_REQUEST));
            }
        }

        const createdMovie = await movieService.updateMovie(id, data);

        res.status(httpStatus.OK).json({data: createdMovie});
    }
}

export const movieController = new MovieController();
