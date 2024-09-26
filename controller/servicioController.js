const Servicio = require("../models/Servicio.js");
const path = require("path");
const fs = require("fs-extra");

//Post//
exports.crearServicio = async (req, res) => {
  try {
    const { nombreSer, empresa, precio, categoria, descripcion, imagen } =
      req.body;
    const newservicio = {
      nombreSer: nombreSer,
      empresa: empresa,
      precio: precio,
      categoria: categoria,
      descripcion: descripcion,
      URLimagen: req.file.path,
    };

    const servicio = new Servicio(newservicio);

    await servicio.save();
    res.send(servicio);
  } catch (error) {
    res.status(500).send("Hubo un error al insertar un servicio");
  }
};

//Get//
exports.consultarServicio= async (req, res)=>{
    try {
        const servicios = await Servicio.find();
        res.json(servicios)
    } catch (error) {
       res.status(500).send('Error al consultar servicios');
    }
   }

//Peticion id//
exports.consultarServicioById= async (req, res)=>{
         try {
             let servicio = await Servicio.findById(req.params.id);
             if(!servicio){
                 res.status(404).json({ msg: "No existe el servicio con esa id"})
                }
                res.json(servicio);
         } catch{ 
            res.status(500).send('Error al consultar el servicio por id');
         }
        }  


   //Put//
   exports.editarServicio = async (req, res)=>{
    try {
       const {nombreSer, empresa, precio, descripcion, imagen}=req.body;
       let servicio = await Servicio.findById(req.params.id);
       if(!servicio){
        res.status(404).json({ msg: "No existe servicio con esa id"})
       }
       servicio.nombreSer = nombreSer;
       servicio.empresa = empresa;
       servicio.precio = precio;
       servicio.descripcion = descripcion;
       servicio.imagen = imagen;
       servicio = await Servicio.findOneAndUpdate({_id: req.params.id}, servicio, {new:true})
       res.json(servicio);
    } catch (error) {
       res.status(500).send('Error al editar un servicio');
    }
   }

//Peticion Delete//
   exports.eliminarServicio= async (req, res)=>{
    try {
        let servicio = await Servicio.findById(req.params.id);
        if(!servicio){
            res.status(404).json({ msg: "No existe este servicio con id"})
           }
           await Servicio.findByIdAndRemove({_id: req.params.id})
           res.json({msg:"Servicio eliminado con exito"});
    } catch{
       res.status(500).send('Error al eliminar un servicio');
    }
   }
    
