//Rutas para productos
const express=require('express');
const router=express.Router();
const productosController=require('../controller/productoController')

//api/productos
router.post('/', productosController.crearProducto);
router.get('/', productosController.consultarProductos);

module.exports=router;

