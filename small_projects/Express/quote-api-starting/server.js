const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getQuotesByAuthor, addNewQuote, getElementById, getElementIndexById, updateElementInArray, deleteElementInArray } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const quotesRouter = express.Router();

quotesRouter.get('/',(req,res,next)=>{
    const author = req.query.person;
    if(!author){
        res.status(200).send({quotes: quotes}); // update behaviour to show all quotes when query values are missing
    } else {
        const authorQuotes = getQuotesByAuthor(author,quotes);
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
    const quoteString = req.query.quote;
    const quotePerson = req.query.person;
    if(quoteString && quotePerson){
        const newQuote = addNewQuote(quoteString,quotePerson,quotes);
        res.status(201).send({ quote: newQuote });
    } else {
        res.status(400).send()
    }
});

quotesRouter.put('/:id',(req,res,next)=>{
    const quoteIndex = getElementIndexById(req.params.id,quotes);
    if(quoteIndex>0){
        const newValue = {
            quote: res.query.quote,
            person: res.query.person
        }
        updateElementInArray(newValue,quoteIndex,quotes);
        res.status(200).send(newValue);
    } else {
        res.status(404).send();
    }
});

quotesRouter.delete('/:id',(req,res,next)=>{
    const quoteIndex = getElementById(req.params.id,quotes);
    if(quoteIndex>0){
        deleteElementInArray(quoteIndex,quotes);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});


app.use('/api/quotes', quotesRouter);


app.listen(PORT);
