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
      const {ubicacion, respuesta1, pregunta1, respuesta2, pregunta2, respuesta3,pregunta3,  respuesta4, pregunta4,  respuesta5,pregunta5, 
        respuesta6,pregunta6,  respuesta7,pregunta7,  respuesta8,pregunta8,  respuesta9, pregunta9, respuesta10,pregunta10, } = req.body;
      const newrespuestas = {
        ubicacion: ubicacion,
        respuesta1: respuesta1,
        pregunta1:pregunta1,
        respuesta2: respuesta2,
        pregunta2:pregunta2,
        respuesta3: respuesta3,
        pregunta3:pregunta3,
        respuesta4: respuesta4,
        pregunta4:pregunta4,
        respuesta5: respuesta5,
        pregunta5:pregunta5,
        respuesta6: respuesta6,
        pregunta6:pregunta6,
        respuesta7: respuesta7,
        pregunta7:pregunta7,
        respuesta8: respuesta8,
        pregunta8:pregunta8,
        respuesta9: respuesta9,
        pregunta9:pregunta9,
        respuesta10: respuesta10,
        pregunta10:pregunta10,
      };
      const respuestas = new Respuestas(newrespuestas);
  
      await respuestas.save();
      res.send(respuestas);
    } catch (error) {
      res.status(500).send("Hubo un error al insertar una respuesta");
    }
  }


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
     const {respuesta1, respuesta2, respuesta3, respuesta4, respuesta5,
      respuesta6, respuesta7, respuesta8, respuesta9, respuesta10}=req.body;
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
