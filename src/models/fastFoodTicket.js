'use strict';

const { Schema, Mongoose, model } = require('mongoose');

const ticketSchema = new Schema({
    ccClient: {
        type: String,
        required: true
    },
    userNameClient: {
        type: String,
        required: true
    },
    menuId: {
        type: String,
        required: true
    },
    requestDate: {
        type: Date,
        required: true
    }

});


const fastFoodTicket = model('fastFoodTicket', ticketSchema);
module.exports = fastFoodTicket;