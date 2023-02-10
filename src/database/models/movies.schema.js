import { model, Schema } from 'mongoose';

import { DB_COLLECTION_NAMES } from "../database.constants";

const MoviesSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  cinemaId: {
    type: String,
    required: true,
    ref: DB_COLLECTION_NAMES.CINEMAS
  }
}, { autoCreate: true });

export const MovieModel = model(
    DB_COLLECTION_NAMES.MOVIES,
    MoviesSchema,
    DB_COLLECTION_NAMES.MOVIES
);
