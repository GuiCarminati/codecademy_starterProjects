const express = require('express');
const errorhandler = require('errorhandler');
const apiMinions = require('./apiMinions');
const apiIdeas = require('./apiIdeas');
const apiMeetings = require('./apiMeetings');
const apiMinionsWork = require('./apiMinionsWork.js');

const apiRouter = express.Router();

// mount subroute for /api/minions/:id/work
apiMinions.use('/:id/work',apiMinionsWork); 
// mount routes for /api /minions, /ideas and /meetings
apiRouter.use('/minions',apiMinions);
apiRouter.use('/ideas',apiIdeas);
apiRouter.use('/meetings',apiMeetings);

apiRouter.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// apiRouter.use(errorhandler());

module.exports = apiRouter;
