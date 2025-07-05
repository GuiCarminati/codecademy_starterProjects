const express = require('express');
const errorhandler = require('errorhandler');
const apiMinions = require('./apiMinions');

const apiRouter = express.Router();

// .use with error handler was here before

apiRouter.use('/minions',apiMinions);

apiRouter.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// apiRouter.use(errorhandler(false));

module.exports = apiRouter;
