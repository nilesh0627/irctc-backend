import type { NextFunction, Request, Response } from "express";
import logger from "../configs/logger.js";

const reqLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = performance.now();
  res.on("finish", () => {
    const duration = (performance.now() - start).toFixed(3);
    logger.info(
      `[${req.method}] ${req.originalUrl} - status:${res.statusCode} - ${duration}ms`,
    );
  });
  next();
};

export { reqLogger };
