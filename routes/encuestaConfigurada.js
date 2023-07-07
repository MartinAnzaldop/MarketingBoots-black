//Rutas para encuesta encuestas configuradas
const express=require('express');
const router=express.Router();
const encuestaConfiguradaController = require('../controller/encuestaConfiguradaController');

//api/encuesta configurada
router.post('/', encuestaConfiguradaController.crearEncuestaConfigurada);
router.get('/', encuestaConfiguradaController.consultarEncuestaConfigurada);
router.get('/:id', encuestaConfiguradaController.consultarEncuestaConfiguradayId);
router.put('/:id', encuestaConfiguradaController.editarEncuestaConfigurada);
router.delete('/:id', encuestaConfiguradaController.eliminarEncuestaConfigurada);



module.exports = router;