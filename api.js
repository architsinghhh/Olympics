const client = require('./connection');

const express = require('express');


const app = express();


app.listen(3000, () => {


    console.log('Server is running on port 3000');
})




client.connect();


app.get('/country', (req, res) => {


    client.query(`set search_path to olympics_db`,(err,result)=>{

        if(!err)
        {
            console.log("Connected to database");
        }
        else{
            console.log(err);
        }
        
        
    });

    client.query(`Select * from country`, (err, result) => {

        if (!err) {
            res.send(result.rows);
        }
        else {
            console.log(err);
        }
    })

    client.end;
})


