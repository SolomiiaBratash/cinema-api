import httpStatus from "http-status";

import { validateTypes } from "./global.constants";
import { ErrorProvider } from "./errors.helpers";

export const validationHandler = (
    schema,
    type = validateTypes.toBody
) => (req, res, next) => {
    let data;

    switch (type) {
        case validateTypes.toQuery:
            data = req.query;
            break;
        case validateTypes.toParams:
            data = req.params;
            break;
        default:
            data = req.body;
    }

    const { error } = schema.validate(data);

    if (error) {
        return next(new ErrorProvider(error.message, httpStatus.BAD_REQUEST))
    }

    return next();
};
