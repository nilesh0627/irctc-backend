import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import { config } from "./configs/env.js";
import { reqLogger } from "./middlewares/req.middleware.js";

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: true,
    crossOriginOpenerPolicy: { policy: "same-origin" },
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // handles form data
app.use(cookieParser());
app.use(
  cors({
    origin: config.ALLOWED_ORIGINS,
    credentials: true, // add cookies in every request even if origin is diffrent (UI/BE)
  }),
);
app.use(reqLogger);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: config.SERVICE_NAME,
  });
});

export { app };
