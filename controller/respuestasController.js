const Respuestas = require('../models/Respuestas.js');
const path = require("path");


//Peticion id//
exports.consultarRespuestasById= async (req, res)=>{
    try {
        let respuestas = await Respuestas.findById(req.params.id);
        if(!respuestas){
            res.status(404).json({ msg: "No existe la respuesta con esa id"})
           }
           res.json(respuestas);
    } catch{ 
       res.status(500).send('Error al consultar la respuesta por id');
    }
   } 


//Peticion Post//
exports.crearRespuestas = async (req, res) => {
  try {
    let respuesta;
   respuesta = new Respuestas(req.body)
   await respuesta.save()
   res.send(respuesta)
  } catch (error) {
    res.status(500).send("Hubo un error al insertar una encuesta");
  }
};

//Peticion Get//
exports.consultarRespuestas= async (req, res)=>{
    try {
        const respuestas = await Respuestas.find();
        res.json(respuestas)
    } catch (error) {
       res.status(500).send('Error al consultar respuesta');
    }
   }

//Peticion Put//
exports.editarRespuestas = async (req, res)=>{
  try {
     
     let respuestas = await Respuestas.findById(req.params.id);
     if(!respuestas){
      res.status(404).json({ msg: "No existe la respuesta con esa id"})
     }
     respuestas.respuesta1 = respuesta1;
     respuestas.respuesta2 = respuesta2;
     respuestas.respuesta3 = respuesta3;
     respuestas.respuesta4 = respuesta4;
     respuestas.respuesta5 = respuesta5;
     respuestas.respuesta6 = respuesta6;
     respuestas.respuesta7 = respuesta7;
     respuestas.respuesta8 = respuesta8;
     respuestas.respuesta9 = respuesta9;
     respuestas.respuesta10 = respuesta10,
     
     respuestas = await Respuestas.findOneAndUpdate({_id: req.params.id}, respuestas, {new:true})
     res.json(respuestas);
  } catch (error) {
     res.status(500).send('Error al editar una respuesta');
  }
}


//Peticion Delete//
exports.eliminarRespuestas= async (req, res)=>{
  try {
      let respuestas = await Respuestas.findById(req.params.id);
      if(!respuestas){
          res.status(404).json({ msg: "No existe esta respuesta con id"})
         }
         await Respuestas.findByIdAndRemove({_id: req.params.id})
         res.json({msg:"Respuesta eliminada con exito"});
  } catch{
     res.status(500).send('Error al eliminar una respuesta');
  }
}
