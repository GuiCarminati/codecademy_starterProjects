const express = require('express');

const { biographicalBlurbs } = require('./data');
const { getRandomElement, getElementsByPerson, addNewElementToArray, getElementById, getElementIndexById, updateElementInArray, deleteElementInArray } = require('./utils');

const blurbsRouter = express.Router();

blurbsRouter.get('/',(req,res,next)=>{
    const person = req.query.person;
    if(!person){
        res.status(200).send({quotes: quotes}); // return all blurbs if no person is passed in query
    } else {
        const personblurbs = getElementsByPerson(person,biographicalBlurbs);
        if(personblurbs.length>0) {
            res.status(200).send({ blurbs: personblurbs });
        } else {
            res.status(404).send('No blurbs found for: '+person);
        }
    }
});

blurbsRouter.get('/random',(req,res,next)=>{
    const randomBlurp = getRandomElement(biographicalBlurbs);
    res.status(200).send({blurbs: randomBlurp});
});

blurbsRouter.post('/',(req,res,next)=>{
    const newValue = {
        bio: req.query.bio,
        person: req.query.person,
        year: req.query.year,
        occupation: req.query.occupation
    };   
    if(newValue.bio && newValue.person && newValue.year && newValue.occupation){
        const newQuote = addNewElementToArray(newValue,biographicalBlurbs);        
        res.status(201).send({ quote: newQuote });
    } else {
        res.status(400).send();
    }
});

blurbsRouter.put('/:id',(req,res,next)=>{
    const blurpIndex = getElementIndexById(req.params.id,biographicalBlurbs);      
    if(blurpIndex>=0){
        const newValue = {
            bio: req.query.bio,
            person: req.query.person,
            year: req.query.year, 
            id: req.params.id
        }
        updateElementInArray(newValue,blurpIndex,biographicalBlurbs);
        res.status(200).send({ blurbs: newValue });
    } else {
        res.status(404).send();
    }
});

blurbsRouter.get('/:id',(req,res,next)=>{
    const blurbs = getElementById(req.params.id,biographicalBlurbs);          
    if(blurbs){
        res.status(200).send({ blurbs: blurbs });
    } else {
        res.status(404).send();
    }
});

blurbsRouter.delete('/:id',(req,res,next)=>{
    const blurpIndex = getElementIndexById(req.params.id,biographicalBlurbs);
    if(blurpIndex>=0){
        deleteElementInArray(blurpIndex,quotes);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});


module.exports = blurbsRouter;
