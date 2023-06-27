const Respuestas = require('../models/Respuestas.js');

//Peticion id//
exports.consultarRespuestasById= async (req, res)=>{
    try {
        let respuestas = await Respuestas.findById(req.params.id);
        if(!preguntaSelec){
            res.status(404).json({ msg: "No existe la respuesta con esa id"})
           }
           res.json(respuestas);
    } catch{ 
       res.status(500).send('Error al consultar la respuesta por id');
    }
   }; 


//Peticion Post//
exports.crearRespuestas = async (req, res) => {
    try {
      const {respuesta1, respuesta2, respuesta3, respuesta4, respuesta5,
        respuesta6, respuesta7, respuesta8, respuesta9, respuesta10} = req.body;
      const newrespuestas = {
        respuesta1: respuesta1,
        respuesta2: respuesta2,
        respuesta3: respuesta3,
        respuesta4: respuesta4,
        respuesta5: respuesta5,
        respuesta6: respuesta6,
        respuesta7: respuesta7,
        respuesta8: respuesta8,
        respuesta9: respuesta9,
        respuesta10: respuesta10,
      };
      const respuestas = new Respuestas(newrespuestas);
  
      await respuestas.save();
      res.send(respuestas);
    } catch (error) {
      res.status(500).send("Hubo un error al insertar una respuesta");
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
   };


