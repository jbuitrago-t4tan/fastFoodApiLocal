'use strict';

const express = require('express');
const app = express();

app.use(require('./menu.routes'));
app.use(require('./ticket.routes'));


module.exports = app;