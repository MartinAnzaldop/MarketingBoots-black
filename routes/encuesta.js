//Rutas para encuestas
const express=require('express');
const router=express.Router();
const encuestaController=require('../controller/encuestaController')

//api/encuestas
router.post('/', encuestaController.crearEncuesta);
router.get('/', encuestaController.consultarEncuesta);
router.get('/:id', encuestaController.consultarEncuestaById);
router.put('/:id', encuestaController.editarEncuesta);
router.delete('/:id', encuestaController.eliminarEncuesta);


module.exports=router;