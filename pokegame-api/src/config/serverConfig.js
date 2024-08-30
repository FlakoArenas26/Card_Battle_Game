module.exports = {
    port: process.env.PORT || 3000,
    corsOptions: {
      origin: '*',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
    },
  };
  