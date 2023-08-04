//Rutas para productos
const express=require('express');
const router=express.Router();
const solicitudController=require('../controller/solicitudController');

//api/productos
router.post('/', solicitudController.crearSolicitud);
router.get('/', solicitudController.consultarSolicitudes);
router.get('/:id', solicitudController.consultarSolicitudById);
router.put('/:id', solicitudController.editarSolicitud);
router.delete('/:id', solicitudController.eliminarSolcitud);

module.exports=router;    