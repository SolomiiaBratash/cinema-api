import { CinemaModel } from "../../database";

export class CinemaService {
    async getCinemas() {
        return CinemaModel.find()
    }

    async getCinemasCount() {
        return CinemaModel.countDocuments()
    }

    async getCinemaById(id) {
        return CinemaModel.findOne({ _id: id })
    }

    async createCinema(data) {
        return CinemaModel.create(data)
    }

    async updateCinema(id, data) {
        return CinemaModel.updateOne({ _id: id }, { $set: data })
    }
}
