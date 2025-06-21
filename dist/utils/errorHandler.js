"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (res, err) => {
    res.status(400).json({
        message: err.name === "ValidationError" ? "Validation failed" : err.message,
        success: false,
        error: {
            name: err.name,
            errors: err.errors,
        },
    });
};
exports.handleError = handleError;
