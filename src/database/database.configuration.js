import mongoose from "mongoose";

import { CinemaService } from "../modules/cinema/cinema.service";
import { MovieService } from "../modules/movie/movie.service";
import { Cinemas, Movies } from "./seeds.warehouse";

const cinemaService = new CinemaService();
const movieService = new MovieService();

const populateSeed = async () => {
    console.log('Seeding database...');

    await Promise.all(
        Cinemas.map((async (cinema) => {
        const createCinema = await cinemaService.createCinema(cinema);
            return Promise.all(
                Movies.map((async (movie) => {
                    return movieService.createMovie({
                        name: `${movie.name}-${Date.now()}`,
                        cinemaId: createCinema._id
                    });
                })));
        })));

    console.log('Seeding database finished.');
};

export const connectMongoose = async () => {
    await mongoose.connect(`mongodb://${process.env.MONGODB_URL}`,async (error) =>{
        if(!error) {
            console.log("connection successful");

            const existingCinemasCount = await cinemaService.getCinemasCount();

            if(!existingCinemasCount) {
                await populateSeed();
            }
        }
    });
};
