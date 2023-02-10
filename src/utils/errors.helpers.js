import httpStatus from "http-status";

export class ErrorProvider extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;

        Error.captureStackTrace(this, this.constructor)
    }
}

export class ErrorHandler extends Error {
    static catch(err, req, res, next) {
        if (!err.status) {
            console.log('Internal server error', err);
        }

        return res
            .status(err.status || httpStatus.INTERNAL_SERVER_ERROR)
            .json({message: err.message})
    }

    static wrap(fn) {
        return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)
    }
}
