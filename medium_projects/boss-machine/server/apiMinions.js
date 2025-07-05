const express = require('express');
const apiMinions = express.Router();
const db = require('./db.js');
const { createError } = require('./utils.js');

const type = 'minions';

apiMinions.get('/', (req,res,next) => {
    const list = db.getAllFromDatabase(type);
    res.status(200).send(list);
});

apiMinions.param('id',(req,res,next,id)=>{
    const found = db.getFromDatabaseById(type,id);
    if(found){
        req.found = found;
        next();
    } else {
        next(`Resource ${type} with id ${id} not found`,404);
    }
});


apiMinions.get('/:id',(req,res,next)=>{
    res.status(200).send(req.found);
});


apiMinions.put('/:id',(req,res,next)=>{
    const original = req.found;    
    const newValues = req.body;
    const newInstance = {
        id: original.id,
        name: newValues.name || original.name,
        title: newValues.title || original.title,
        weaknesses: newValues.weaknesses || original.weaknesses,
        salary: newValues.salary || original.salary
    }
    const updated = db.updateInstanceInDatabase(type,newInstance);
    if(updated){
        res.status(200).send(updated);
    } else {
        next(createError('Failed to update'));
    }
});

apiMinions.delete('/:id',(req,res,next) => {
    const id = req.found.id;
    db.deleteFromDatabasebyId(type,id);
    res.status(204).send(`Resource ${type} with id ${id} deleted`);
});

apiMinions.post('/',(req,res,next)=>{
    const newValues = req.body;
    const newInstance = {
        name: newValues.name,
        title: newValues.title,
        weaknesses: newValues.weaknesses,
        salary: newValues.salary
    }
    const created = db.addToDatabase(type,newInstance);
    if(created){
        res.status(200).send(created);
    } else {
        next(createError('Failed to create'));
    }
});


module.exports = apiMinions;

