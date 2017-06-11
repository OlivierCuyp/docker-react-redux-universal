const env = process.env;

// Since config with require this file, we need to module.exports it
module.exports = {
  logLevel: env.LOGLEVEL || 'info',
  appPort: env.APP_PORT || 3000,
  serverRender: env.SERVER_RENDER || true
};
