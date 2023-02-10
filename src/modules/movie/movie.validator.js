import Joi from "joi";

export const cinemaIdSchema = Joi.object().keys({
    id: Joi.string().required()
});

export const saveMovieSchema = Joi.object().keys({
    name: Joi.string().required(),
    cinemaId: Joi.string().required()
});

export const updateMovieBodySchema = Joi.object().keys({
    name: Joi.string(),
    cinemaId: Joi.string()
});

export const updateMovieParamsSchema = cinemaIdSchema.keys();
export const getMovieParamsSchema = cinemaIdSchema.keys();
