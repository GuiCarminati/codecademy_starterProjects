const db = require('./db.js');
const { createError } = require('./utils.js');

function getAllResources(req,res,next){
    const type = req.type;
    const list = db.getAllFromDatabase(type);
    res.status(200).send(list);
}

// checks if ID exists and sets 
function processId(req,res,next,id){
    const type = req.type;
    const found = db.getFromDatabaseById(type,id);
    if(found){
        req.found = found;
        next();
    } else {
        next(createError(`Resource ${type} with id ${id} not found`,404));
    }
}

function getById(req,res,next){
    res.status(200).send(req.found);
}

function createResource(req,res,next){
    const type = req.type;
    const created = db.addToDatabase(type,req.newInstance);
    if(created){
        res.status(200).send(created);
    } else {
        next(createError('Failed to create'));
    }
}

function updateResource(req,res,next){
    const type = req.type;
    const updated = db.updateInstanceInDatabase(type,req.newInstance);
    if(updated){
        res.status(200).send(updated);
    } else {
        next(createError('Failed to update'));
    }
}

function deleteResource(req,res,next){
    const type = req.type;
    const id = req.found.id;
    db.deleteFromDatabasebyId(type,id);
    res.status(204).send(`Resource ${type} with id ${id} deleted`);
}





module.exports = {
    getAllResources,
    processId,
    getById,
    createResource,
    updateResource,
    deleteResource,
}