const express = require('express');
const apiMinionsWork = express.Router({mergeParams: true});
const crud = require('./crudHandlers.js');
const utils = require('./utils.js');
const db = require('./db.js');

apiMinionsWork.use('/',utils.setType);

apiMinionsWork.get('/', getAllWorksFromMinion);

apiMinionsWork.param('workId', crud.processId);

apiMinionsWork.delete('/:workId', crud.deleteResource);

apiMinionsWork.put('/:workId', validateWork, newWorkInstance, crud.updateResource);

apiMinionsWork.post('/', newWorkInstance, crud.createResource);

function validateWork(req,res,next){
    const minionId = req.params.id;
    const workMinionId = req.body.minionId;
    if(minionId !== workMinionId){
        next(utils.createError('Invalid minionId for this work.',400));
    } else {
        next();
    }
}

function getAllWorksFromMinion(req,res,next){    
    const workList = db.getAllFromDatabase(req.type).filter(work => {
        return work.minionId === req.params.id;
    });
    res.status(200).send(workList);
}

function newWorkInstance(req,res,next){
    const newValues = req.body;
    let newInstance;
    if(req.method === 'PUT'){
        const original = req.found;  
        newInstance = {
            id: original.id,
            title: newValues.title || original.title,
            description: newValues.description || original.description,
            hours: newValues.hours || original.hours,
            minionId: original.minionId
        }
    } else if(req.method === 'POST'){ 
        newInstance = {
            title: newValues.title,
            description: newValues.description,
            hours: newValues.hours,
            minionId: req.params.id
        }
    }
    req.newInstance = newInstance;
    next();
}

module.exports = apiMinionsWork;

