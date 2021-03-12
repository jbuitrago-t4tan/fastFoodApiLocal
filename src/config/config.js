'use strict';

// Port 

process.env.PORT = process.env.PORT || 3000;


// Engine

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// Database

let urlDataBase;

if (process.env.NODE_ENV === 'dev') {
    urlDataBase = `mongodb+srv://globalUser:QibSB8NQTC9W8nzo@cluster0.qfzso.mongodb.net/fastFoodApi?retryWrites=true&w=majority`;
} 

process.env.URLDB = urlDataBase;