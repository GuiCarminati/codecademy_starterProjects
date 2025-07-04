const express = require('express');
const apiMinions = express.Router();
const db = require('db.js');

apiMinions.get('/', (req,res,next) => {
    res.status(200).send()
});





module.exports = apiMinions;

