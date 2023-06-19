const Encuesta = require('../models/Encuesta.js');

//Peticion id//
exports.consultarEncuestaById= async (req, res)=>{
    try {
        let encuesta = await Encuesta.findById(req.params.id);
        if(!encuesta){
            res.status(404).json({ msg: "No existe una encuesta con esa id"})
           }
           res.json(encuesta);
    } catch{ 
       res.status(500).send('Error al consultar la encuesta por id');
    }
   }; 


//Peticion Post//
exports.crearEncuesta = async (req, res) => {
    try {
      const { pregunta1} = req.body;
      const newencuesta = {
        pregunta1: pregunta1
      };
      const encuesta = new Encuesta(newencuesta);
  
      await encuesta.save();
      res.send(encuesta);
    } catch (error) {
      res.status(500).send("Hubo un error al insertar una encuesta");
    }
  };


//Peticion Get//
exports.consultarEncuesta= async (req, res)=>{
    try {
        const encuesta = await Encuesta.find();
        res.json(encuesta)
    } catch (error) {
       res.status(500).send('Error al consultar encuesta');
    }
   };


//Peticion Put//
exports.editarEncuesta = async (req, res)=>{
    try {
       const {pregunta1}=req.body;
       let encuesta = await Encuesta.findById(req.params.id);
       if(!encuesta){
        res.status(404).json({ msg: "No existe una encuesta con esa id"})
       }
       encuesta.pregunta1 = pregunta1;
       encuesta = await Encuesta.findOneAndUpdate({_id: req.params.id}, encuesta, {new:true})
       res.json(encuesta);
    } catch (error) {
       res.status(500).send('Error al editar una encuesta');
    }
};


//Peticion Delete//
exports.eliminarEncuesta= async (req, res)=>{
    try {
        let encuesta = await Encuesta.findById(req.params.id);
        if(!encuesta){
            res.status(404).json({ msg: "No existe esta encuesta con id"})
           }
           await Encuesta.findByIdAndRemove({_id: req.params.id})
           res.json({msg:"Encuesta eliminada con exito"});
    } catch{
       res.status(500).send('Error al eliminar una encuesta');
    }
};
