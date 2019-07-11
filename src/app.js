const express = require('express');
const sendErro = require('@helpers/sendError');
const rateLimit = require('@middleware/rateLimit');
const routes = require('./routes');

const app = express();

// Necessário para ter acesso ao req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(sendErro);

app.use(...rateLimit);

app.use('/', routes);

module.exports = app;
