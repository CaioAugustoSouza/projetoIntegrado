const express = require('express')
router = express.Router();

const AdministratorController = require('../controllers/administratorController');

let ctrl = new AdministratorController();

router.get('/', ctrl.administratorView);
router.get('/menu', ctrl.menuView);
router.get('/cadastrarTipo', ctrl.tipoView);
router.post('/cadastrarTipo', ctrl.tipo);


module.exports = router;