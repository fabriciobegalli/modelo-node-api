const express = require('express');
const sendErro = require('@helpers/sendError');
const routes = require('./routes');

const app = express();

// Necessário para ter acesso ao req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(sendErro);

app.use('/', routes);

module.exports = app;
