const express = require('express');

const { quotes } = require('./data');
const { getRandomElement, getElementsByPerson, addNewElementToArray, getElementById, getElementIndexById, updateElementInArray, deleteElementInArray } = require('./utils');

const quotesRouter = express.Router();

quotesRouter.get('/',(req,res,next)=>{
    const author = req.query.person;
    if(!author){
        res.status(200).send({quotes: quotes}); // update behaviour to show all quotes when query values are missing
    } else {
        const authorQuotes = getElementsByPerson(author,quotes);
        if(authorQuotes.length>0) {
            res.status(200).send({ quotes: authorQuotes });
        } else {
            res.status(404).send('No quotes found for author: '+author);
        }
    }
});

quotesRouter.get('/random',(req,res,next)=>{
    const randomQuote = getRandomElement(quotes);
    res.status(200).send({quote: randomQuote});
});

quotesRouter.post('/',(req,res,next)=>{
    const newValue = {
        quote: req.query.quote,
        person: req.query.person,
        year: req.query.year
    };   
    if(newValue.quote && newValue.person && newValue.year){
        const newQuote = addNewElementToArray(newValue,quotes);        
        res.status(201).send({ quote: newQuote });
    } else {
        res.status(400).send();
    }
});

quotesRouter.put('/:id',(req,res,next)=>{
    const quoteIndex = getElementIndexById(req.params.id,quotes);      
    if(quoteIndex>=0){
        const newValue = {
            quote: req.query.quote,
            person: req.query.person,
            year: req.query.year, 
            id: req.params.id
        }
        updateElementInArray(newValue,quoteIndex,quotes);
        res.status(200).send({ quote: newValue });
    } else {
        res.status(404).send();
    }
});

quotesRouter.get('/:id',(req,res,next)=>{
    const quote = getElementById(req.params.id,quotes);   
    // console.log(quote);
       
    if(quote){
        res.status(200).send({ quote: quote });
    } else {
        res.status(404).send();
    }
});

quotesRouter.delete('/:id',(req,res,next)=>{
    const quoteIndex = getElementIndexById(req.params.id,quotes);
    if(quoteIndex>=0){
        deleteElementInArray(quoteIndex,quotes);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});


module.exports = quotesRouter;
