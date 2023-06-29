//Rutas para encuesta encuestas seleccionadas
const express=require('express');
const router=express.Router();
const encuestaConfiguradaController = require('../controller/encuestaConfiguradaController');

//api/encuesta configurada
router.post('/', encuestaConfiguradaController.crearEncuestaConfigurada);
router.get('/', encuestaConfiguradaController.consultarEncuestaConfigurada);
//router.get('/:id', encuestaConfiguradaController.consultarEncuestaConfiguradaById);
//router.put('/:id', encuestaConfiguradaController.editarEncuestaConfiguracion);
router.delete('/:id', encuestaConfiguradaController.eliminarEncuestaConfigurada);



module.exports = router;