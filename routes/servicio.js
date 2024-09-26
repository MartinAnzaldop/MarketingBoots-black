//Rutas para productos
const express=require('express');
const router=express.Router();
const serviciosController=require('../controller/servicioController')

//api/productos
router.post('/', serviciosController.crearServicio);
router.get('/', serviciosController.consultarServicio);
router.get('/:id', serviciosController.consultarServicioById);
router.put('/:id', serviciosController.editarServicio);
router.delete('/:id', serviciosController.eliminarServicio);


module.exports=router;

