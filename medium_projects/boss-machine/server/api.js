const express = require('express');
const errorhandler = require('errorhandler');
const apiMinions = require('./apiMinions');
const apiIdeas = require('./apiIdeas');
const apiMeetings = require('./apiMeetings');

const apiRouter = express.Router();

apiRouter.use('/minions',apiMinions);
apiRouter.use('/ideas',apiIdeas);
apiRouter.use('/meetings',apiMeetings);

apiRouter.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// apiRouter.use(errorhandler());

module.exports = apiRouter;
