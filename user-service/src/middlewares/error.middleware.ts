/**
 * Global Error Handling Middleware
 *
 * Main job: catch any thrown error from any controller or logic file
 * and return error response from middleware.
 *
 * Central place to return error response to clients.
 * Also handles error logging via logger (winston).
 *
 * @param err - The thrown error (any type)
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */

import type { Request, Response, NextFunction } from "express";
import logger from "../configs/logger.js";
import { AppError, InternalServerError } from "../utils/error.js";

const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const error =
    err instanceof AppError
      ? err
      : new InternalServerError("Internal Server error", err);

  logger.error(error.message, {
    type: error.id,
    statusCode: error.statusCode,
    cause: error?.cause,
    stack: error.stack,
  });

  // safety check - if express has already started sending res bytes then move to next once instead of sending raw json again from line 43
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.statusCode).json({
    message: error.message,
    type: error.id,
    statusCode: error.statusCode,
    // cause: error?.cause,
    // stack: error.stack,
  });
};

export { errorMiddleware };
