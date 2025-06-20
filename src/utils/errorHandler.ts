import { Response } from "express";

export const handleError = (res: Response, err: any) => {
  res.status(400).json({
    message: err.name === "ValidationError" ? "Validation failed" : err.message,
    success: false,
    error: {
      name: err.name,
      errors: err.errors,
    },
  });
};
