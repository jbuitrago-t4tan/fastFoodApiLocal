'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fastFoodApiRoutes = require('./routes/index.routes');
require('./config/config');

const app = express();


// Middlewares 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Routes 
app.get('/', (req, res) => res.json('This is home'));
app.use('/', fastFoodApiRoutes);


app.listen(process.env.PORT, () => {
    console.log("Listening port...", process.env.PORT);
});

// ---------- Creating connection to MongoDB -----------

mongoose.connect(process.env.URLDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}). then (db => console.log('Database is online!'))
.catch(error => console.log(error));
