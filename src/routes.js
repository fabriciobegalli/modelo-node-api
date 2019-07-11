const Router = require('express').Router();
const HomeController = require('@controller/home');

Router.get('/', HomeController.helloWorld).post('/', HomeController.createUser);
Router.get('/erro', HomeController.helloErro);

module.exports = Router;
