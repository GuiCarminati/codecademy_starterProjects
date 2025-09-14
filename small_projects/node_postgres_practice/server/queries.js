const pool = require('./../config/pool');

function getUsers(req,res){
    pool.query('SELECT * FROM users ORDER BY id ASC;', (err,results) => {
        if(err) throw err;
        res.status(200).json(results.rows);
    })
}

function getUserById(req,res){
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM users WHERE id = $1;',[id],(err,results)=>{
        if(err) throw err;
        res.status(200).json(results.rows);
    });
}

function createUser(req,res){
    const {name, email} = req.body;
    pool.query('INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *;',[name,email],(err,results)=>{
        if(err) throw err;
        // res.status(200).send(`User with ID ${results.rows[0].id} created`);
        res.status(200).send(`Created user: {
                id: ${results.rows[0].id},
                name: ${results.rows[0].name},
                email:  ${results.rows[0].email}
            }`);
    });
}

function updateUserById(req,res){
    const id = parseInt(req.params.id);
    const {name, email} = req.body;
    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3;',
        [name, email, id],
        (err,results)=>{
            if(err) throw err;
            res.status(200).send(`Modified user with ID ${id}: ${name}, ${email}`);
        }
    );
}

function deleteUserById(req,res){
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM users WHERE id = $1;',[id],(err,results)=>{
        if(err) throw err;
        res.status(204).send(`Deleted user with ID ${id}`);
    });
}


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
};