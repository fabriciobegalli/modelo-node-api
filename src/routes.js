const router = require('express').Router();
const HomeController = require('@controller/home');

router.get('/', HomeController.helloWorld).post('/', HomeController.createUser);

module.exports = router;
