const express = require('express');
const apiIdeas = express.Router();
const crud = require('./crudHandlers.js');
const utils = require('./utils.js');

apiIdeas.use('/',utils.setType);

apiIdeas.get('/', crud.getAllResources);

apiIdeas.param('id', crud.processId);

apiIdeas.get('/:id', crud.getById);

apiIdeas.delete('/:id', crud.deleteResource);

apiIdeas.put('/:id',newIdeaInstance, crud.updateResource);

apiIdeas.post('/',newIdeaInstance, crud.createResource);

function newIdeaInstance(req,res,next){    
    const newValues = req.body;
    let newInstance;
    if(req.method === 'PUT'){
        const original = req.found;  
        newInstance = {
            id: original.id,
            name: newValues.name || original.name,
            description: newValues.description || original.description,
            weeklyRevenue: newValues.weeklyRevenue || original.weeklyRevenue,
            numWeeks: newValues.numWeeks || original.numWeeks
        }        
    } else if(req.method === 'POST'){ 
        newInstance = {
            name: newValues.name,
            description: newValues.description,
            weeklyRevenue: newValues.weeklyRevenue,
            numWeeks: newValues.numWeeks
        }
    }
    req.newInstance = newInstance;
    next();
}

module.exports = apiIdeas;

