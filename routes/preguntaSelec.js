//Rutas para preguntas seleccionadas
const express=require('express');
const router=express.Router();
const preguntaSelecController=require('../controller/preguntaSelecController')

//api/preguntas seleccionadas
router.post('/', preguntaSelecController.crearPreguntaSelec);
router.get('/', preguntaSelecController.consultarPreguntaSelec);
router.get('/:id', preguntaSelecController.consultarPreguntaSelecById);
router.put('/:id', preguntaSelecController.editarPreguntaSelec);
router.delete('/:id', preguntaSelecController.eliminarPreguntaSelec);


module.exports=router;