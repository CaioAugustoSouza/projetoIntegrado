const express = require('express');
router = express.Router()
const HomeController = require('../controllers/homeController')


ctrl = new HomeController();

router.get('/', ctrl.homeView);
router.get('/login', ctrl.loginView);



module.exports = router;