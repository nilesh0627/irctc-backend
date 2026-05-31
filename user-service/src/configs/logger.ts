import winston from "winston";
import { config } from "./env.js";

const { combine, timestamp, json } = winston.format;
const logger = winston.createLogger({
  level: config.LOG_LEVEL,
  defaultMeta: {
    service: config.SERVICE_NAME,
  },
  format: json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/combined.log",
      format: combine(timestamp(), json()),
    }),
    new winston.transports.File({
      level: "error",
      filename: "logs/error.log",
      format: combine(timestamp(), json()),
    }),
  ],
});

export default logger;
