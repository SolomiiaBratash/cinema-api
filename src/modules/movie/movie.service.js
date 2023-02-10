import { MovieModel } from "../../database";

export class MovieService {
    async getMovies() {
        return MovieModel.find().populate('cinemaId');
    }

    async getMovieById(id) {
        return MovieModel.findOne({ _id: id }).populate('cinemaId');

    }

    async createMovie(data) {
        return MovieModel.create(data)
    }

    async updateMovie(id, data) {
        return MovieModel.updateOne({ _id: id }, { $set: data })
    }
}
