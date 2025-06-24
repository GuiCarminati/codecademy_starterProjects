const express = require('express');
const app = express();

const quotesRouter = require('./quotes.js');
const blurbsRouter = require('./biographicalBlurbs.js')

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.use('/api/quotes', quotesRouter);
app.use('/api/blurbs', blurbsRouter);


app.listen(PORT);
