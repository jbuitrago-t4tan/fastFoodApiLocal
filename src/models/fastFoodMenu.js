'use strict';

const { Schema, Mongoose, model } = require('mongoose');

// menu model
const menuSchema = new Schema({
    menuId: {
        type: String,
        required: true
    },
    menuName: {
        type: String,
        required: true
    },
    menuPrice: {
        type: Number,
        required: true
    }

});

const fastFoodMenu = model('fastFoodMenu', menuSchema);
module.exports = fastFoodMenu;