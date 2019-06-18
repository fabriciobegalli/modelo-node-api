module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    connectionString:
      process.env.MONGODB
      || 'mongodb+srv://fbegalli:v4d9f@modelo-b7v6b.mongodb.net/test?retryWrites=true&w=majority',
  },
};
