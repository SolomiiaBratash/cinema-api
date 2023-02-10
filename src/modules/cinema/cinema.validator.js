import Joi from "joi";

export const cinemaIdSchema = Joi.object().keys({
    id: Joi.string().required()
});

export const saveCinemaSchema = Joi.object().keys({
    name: Joi.string().required(),
    suburb: Joi.string().required()
});

export const updateCinemaBodySchema = Joi.object().keys({
    suburb: Joi.string(),
    name: Joi.string()
});

export const updateCinemaParamsSchema = cinemaIdSchema.keys();
export const getCinemaParamsSchema = cinemaIdSchema.keys();
