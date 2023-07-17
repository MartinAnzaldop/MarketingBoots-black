//Rutas para respuestas seleccionadas
const express=require('express');
const router=express.Router();
const respuestasController=require('../controller/respuestasController')

//api/preguntas seleccionadas
router.post('/', respuestasController.crearRespuestas);
router.get('/', respuestasController.consultarRespuestas);
router.get('/:id', respuestasController.consultarRespuestasById);
router.put('/:id', respuestasController.editarRespuestas);
router.delete('/:id', respuestasController.eliminarRespuestas);

module.exports=router; 