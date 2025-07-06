const express = require('express');
const apiMinions = express.Router();
const crud = require('./crudHandlers.js');
const utils = require('./utils.js');

apiMinions.use('/',utils.setType);

apiMinions.get('/', crud.getAllResources);

apiMinions.param('id', crud.processId);

apiMinions.get('/:id', crud.getById);

apiMinions.delete('/:id', crud.deleteResource);

apiMinions.put('/:id',newMinionInstance, crud.updateResource);

apiMinions.post('/',newMinionInstance, crud.createResource);

function newMinionInstance(req,res,next){
    const newValues = req.body;
    let newInstance;
    if(req.method === 'PUT'){
        const original = req.found;  
        newInstance = {
            id: original.id,
            name: newValues.name || original.name,
            title: newValues.title || original.title,
            weaknesses: newValues.weaknesses || original.weaknesses,
            salary: newValues.salary || original.salary
        }
    } else if(req.method === 'POST'){ 
        newInstance = {
            name: newValues.name,
            title: newValues.title,
            weaknesses: newValues.weaknesses,
            salary: newValues.salary
        }
    }
    req.newInstance = newInstance;
    next();
}

module.exports = apiMinions;

