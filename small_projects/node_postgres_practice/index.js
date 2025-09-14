const express = require('express');
const bodyParser = require('body-parser');
const db = require('./server/queries')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.json({info: 'Node.js, Express and Postgres API'});
});

app.get('/users',db.getUsers);
app.get('/users/:id',db.getUserById);
app.post('/users',db.createUser);
app.put('/users/:id',db.updateUserById);
app.delete('/users/:id',db.deleteUserById);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});




