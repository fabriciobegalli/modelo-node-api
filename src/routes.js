const router = require('express').Router();
const HomeController = require('@controller/home');

router.get('/', HomeController.helloWorld).post('/', HomeController.createUser);
router.get('/erro', HomeController.helloErro);

module.exports = router;
