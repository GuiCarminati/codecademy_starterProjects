const express = require('express');
const apiMeetings = express.Router();
const crud = require('./crudHandlers.js');
const utils = require('./utils.js');
const db = require('./db.js');

apiMeetings.use('/',utils.setType);

apiMeetings.get('/', crud.getAllResources);

apiMeetings.param('id', crud.processId);

apiMeetings.delete('/', crud.deleteAllResourcesFromType);

apiMeetings.post('/',newMeetingInstance, crud.createResource);

function newMeetingInstance(req,res,next){   
    req.newInstance = db.createMeeting();
    next();
}

module.exports = apiMeetings;

