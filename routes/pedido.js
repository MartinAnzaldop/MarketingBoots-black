//Rutas para productos
const express=require('express');
const router=express.Router();
const pedidoController=require('../controller/pedidoController')

//api/productos
router.post('/', pedidoController.crearPedido);
router.get('/', pedidoController.consultarPedidos);
router.get('/:id', pedidoController.consultarPedidoById);
router.put('/:id', pedidoController.editarPedido);
router.delete('/:id', pedidoController.eliminarPedido);

 

module.exports=router;

 