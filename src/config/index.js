module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    connectionString: process.env.MONGO_DB,
  },
  requests: {
    rateLimit: {
      window: 20 * 60 * 1000, // ms
      max: 150,
    },
    slowDown: {
      window: 15 * 60 * 1000, // ms
      delayAfter: 500,
      delayMs: 100,
    },
  },
  lang: process.env.API_LANG || 'pt-br',
};
