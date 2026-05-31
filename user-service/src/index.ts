import "dotenv/config";
import { app } from "./app.js";
import { config } from "./configs/env.js";
import logger from "./configs/logger.js";

app.listen(config.PORT, () => {
  logger.info(`app started listening ${config.PORT}`);
});
