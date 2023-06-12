//Rutas para productos
const express=require('express');
const multer=require('../libs/multer.js')
const router=express.Router();
const productosController=require('../controller/productoController')

//api/productos
router.post('/', multer.single('URLimagen'), productosController.crearProducto);
router.get('/', productosController.consultarProductos);
router.get('/:id', productosController.consultarProductoById);
router.put('/:id', productosController.editarProducto);
router.delete('/:id', productosController.eliminarProducto);



module.exports=router;

