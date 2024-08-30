module.exports = {
    port: process.env.PORT || 3001,
    corsOptions: {
      origin: '*',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
    },
  };
  