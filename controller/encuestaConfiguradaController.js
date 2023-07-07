const encuestaConfigurada = require("../models/encuestaConfigurada");

//Post//
exports.crearEncuestaConfigurada = async (req, res) => {
    try {
      let encuestaconfigurada;
     encuestaconfigurada = new encuestaConfigurada(req.body)
     await encuestaconfigurada.save()
     res.send(encuestaconfigurada)
     console.log(encuestaconfigurada);
    } catch (error) {
      res.status(500).send("Hubo un error al insertar una encuesta configurada");
    }
  };

//Get//
exports.consultarEncuestaConfigurada = async (req, res) =>{
    try {
        const encuestaconfiguradas = await encuestaConfigurada.find();
        res.json(encuestaconfiguradas)
    }catch (error){
        res.status(500).send("Hubo un error al consultar la encuesta configurada")
    }
};
//id//
exports.consultarEncuestaConfiguradayId = async (req, res) => {
    try {
      let encuestaconfigurada = await encuestaConfigurada.findById(req.params.id);
      if(!encuestaconfigurada){
          res.status(404).json({ msg: "No existe una encuesta configurada con esa id"})
        }
        res.json(encuestaconfigurada);
    } catch (error) {
      res.status(500).send("Hubo un error al buscar por id una encuesta configurada");
    }
  };

//Delete//
exports.eliminarEncuestaConfigurada = async (req, res) => {
    try {
        let encuestaconfigurada = await encuestaConfigurada.findById(req.params.id);
          if(!encuestaconfigurada){
              res.status(404).json({ msg: "No existe la encuesta configurada con ese id"})
             }
             await encuestaConfigurada.findByIdAndRemove({_id: req.params.id})
             res.json({msg:"pedido eliminado con exito"});
  
      } catch (error) {
        res.status(500).send("Hubo un error al eliminar una encuesta configurada");
      }
};

//Put//
exports.editarEncuestaConfigurada = async (req, res) => {
  try {
    const {fechaInicio, fechaFinal, titulo, poblacion, articulo, numeroEncuesta}=req.body;
     let encuestaconfigurada = await encuestaConfigurada.findById(req.params.id);
     if(!encuestaconfigurada){
      res.status(404).json({ msg: "No existe la encuesta configurada con esa id"})
     }
     encuestaconfigurada.fechaInicio = fechaInicio;
     encuestaconfigurada.fechaFinal = fechaFinal;
     encuestaconfigurada.titulo = titulo;
     encuestaconfigurada.poblacion = poblacion;
     encuestaconfigurada.articulo = articulo;
     encuestaconfigurada.numeroEncuesta = numeroEncuesta;
     encuestaconfigurada = await encuestaConfigurada.findOneAndUpdate({_id: req.params.id}, encuestaconfigurada, {new:true})
     res.json(encuestaconfigurada)

  } catch (error) {
    res.status(500).send("Hubo un error al editar una encuesta configurada");
  }
}; 
