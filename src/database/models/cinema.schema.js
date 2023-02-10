import { model, Schema } from 'mongoose';

import { DB_COLLECTION_NAMES } from "../database.constants";

const CinemaSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  suburb: {
    type: String,
    required: true
  }
}, { autoCreate: true });

export const CinemaModel = model(
    DB_COLLECTION_NAMES.CINEMAS,
    CinemaSchema,
    DB_COLLECTION_NAMES.CINEMAS
);
