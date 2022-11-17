const {Client} = require('pg');


const client = new Client({
    

    host:'localhost',
    user:'postgres',
    port:5432,
    password:'admin',
    database:'olympics_db',
    
    
    
});


module.exports = client