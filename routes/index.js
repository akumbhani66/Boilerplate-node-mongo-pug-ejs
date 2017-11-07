var express = require('express');
var router = express.Router();

var homeController = require('../controllers/home.controller');
var userController = require('../controllers/user.controller');

router.get('/', homeController.index);
router.get('/about', homeController.about);
router.get('/users', userController.index);

module.exports = router;
