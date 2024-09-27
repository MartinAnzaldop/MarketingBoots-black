//Rutas para banco de preguntas
const express=require('express');
const router=express.Router();
const bancoPreguController=require('../controller/bancoPreguController')

//api/banco de preguntas
router.post('/', bancoPreguController.crearBancoPregu);
router.get('/', bancoPreguController.consultarBancoPregu);
router.get('/:id', bancoPreguController.consultarBancoPreguById);
router.put('/:id', bancoPreguController.editarBancoPregu);
router.delete('/:id', bancoPreguController.eliminarBancoPregu);

 
module.exports=router;