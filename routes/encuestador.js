//Rutas para agregar encuestador
const express = require('express');
const router = express.Router();
const encuestadorController = require('../controller/encuestadorController');

//api/encuestador
router.post('/', encuestadorController.crearEncuestador);
router.get('/', encuestadorController.consultarEncuestador);
router.get('/:id', encuestadorController.consultarEncuestadorById);
router.put('/:id', encuestadorController.editarEncuestador);
router.delete('/:id', encuestadorController.eliminarEncuestador);

module.exports = router;