const Encuestador = require('../models/Encuestador.js');

//Post//
exports.crearEncuestador= async (req, res)=>{
 try {
     let encuestador;
     encuestador = new Encuestador(req.body);
     await encuestador.save();
     res.send(encuestador)
 } catch (error) {
    res.status(500).send('Error al agregar un encuestador');
 }
}

//Get//
exports.consultarEncuestador= async (req, res)=>{
    try {
        const encuestador = await Encuestador.find();
        res.json(encuestador)
    } catch (error) {
       res.status(500).send('Error al consultar al encuestador');
    }
   }

//Peticion id//
exports.consultarEncuestadorById= async (req, res)=>{
         try {
             let encuestador = await Encuestador.findById(req.params.id);
             if(!encuestador){
                 res.status(404).json({ msg: "No existe el encuestador con ese id"})
                }
                res.json(encuestador);
         } catch{ 
            res.status(500).send('Error al consultar el encuestador por id');
         }
        }  


   //Put//
   exports.editarEncuestador = async (req, res)=>{
    try {
       const {nombreEnc, edad, sexo, correoElect, contraseña}=req.body;
       let encuestador = await Encuestador.findById(req.params.id);
       if(!encuestador){
        res.status(404).json({ msg: "No existe el encuestador con ese id"})
       }
       encuestador.nombreEnc = nombreEnc;
       encuestador.edad = edad;
       encuestador.sexo = sexo;
       encuestador.correoElect = correoElect;
       encuestador.contraseña = contraseña;
       encuestador = await Encuestador.findOneAndUpdate({_id: req.params.id}, encuestador, {new:true})
       res.json(encuestador);
    } catch (error) {
       res.status(500).send('Error al editar el encuestador');
    }
   }

//Peticion Delete//
   exports.eliminarEncuestador= async (req, res)=>{
    try {
        let encuestador = await Encuestador.findById(req.params.id);
        if(!encuestador){
            res.status(404).json({ msg: "No existe este encuestador con id"})
           }
           await Encuestador.findByIdAndRemove({_id: req.params.id})
           res.json({msg:"Encuestador fue eliminado con exito"});
    } catch{
       res.status(500).send('Error al eliminar un encuestador');
    }
   }