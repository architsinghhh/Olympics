const express = require('express');
const pool = require('./connection');
const morgan = require('morgan');

const app = express();


app.set('view engine', 'ejs');

app.listen(3000, () => {

    console.log('Server is running on port 3000');
})
app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    res.sendFile('index.html', { root: __dirname });

    // pool.query(`select * from olympics_db.athlete`).then((result) => {
       
    //     res.send(result.rows)

    // }).catch((err) => res.json(err));


    
});



// app.post('/query', (req, res) => {
//     var data = [];

//     pool.query(`${req.body.body}`).then((result) => {
//         res.render("buildtable", {
//             data: {
//                 result1: result.rows
//             },
//         });

//     }).catch((err) => res.json(err));
// })



// table routes

app.post('/athlete', (req, res) => {

  

    var data = [];

    pool.query(`select * from olympics_db.athlete`).then((result) => {
        console.log(result.rows);
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})


app.post('/sport', (req, res) => {

       var data = [];

    pool.query(`select * from olympics_db.sport`).then((result) => {
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})


app.post('/country', (req, res) => {

    var data = [];

    pool.query(`select * from olympics_db.country`).then((result) => {
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})



app.post('/medal', (req, res) => {

    var data = [];

    pool.query(`select * from olympics_db.medal`).then((result) => {
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})


app.post('/category', (req, res) => {

   
    var data = [];

    pool.query(`select * from olympics_db.category`).then((result) => {
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})

app.post('/hosting country', (req, res) => {

    
    var data = [];

    pool.query(`select * from olympics_db."hosting country"`).then((result) => {
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})

app.post('/paralympics', (req, res) => {

    
    var data = [];

    pool.query(`select * from olympics_db.paralympics`).then((result) => {
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})
app.post('/olympics', (req, res) => {

    
    var data = [];

    pool.query(`select * from olympics_db.olympics`).then((result) => {
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})


