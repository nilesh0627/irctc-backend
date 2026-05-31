const config = {
  PORT: Number(process.env.PORT) || 4000,
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  NODE_ENV: process.env.NODE_ENV || "development",
  SERVICE_NAME: "user-service",
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(",") || [],
};

export { config };
