const router = require('express').Router();
const HomeController = require('@controller/home');

router.get('/', HomeController.helloWorld);

module.exports = router;
