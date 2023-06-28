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
        const encuestaconfigurada = await encuestaConfigurada.find();
        res.json(encuestaconfigurada)
    }catch (error){
        res.status(500).send("Hubo un error al consultar la encuesta configurada")
    }
};

/*//Petición id//
exports.consultarEncuestaConfiguradaById = async (req, res) =>{
  try{
        let encuestaconfigurada = await encuestaConfigurada.findById(req.params.id);
        if (!encuestaconfigurada) {
            res.status(404).json({msg: "No existe la encuesta configurada con ese id"});
        }
        res.json(encuestaconfigurada);
    }catch {
        res.status(500).send("Error al consultar la encuesta configurada por medio del id");
    }
};

//Put//
exports.editarEncuestaConfiguracion = async (req, res) => {
    try{
        const {fechaInicio, fechaFinal, titulo, poblacion, articulo, nEncuestas} =
        req.body;
        let encuestaconfigurada = await encuestaConfigurada.findById(req.params.id);
        if (!encuestaconfigurada) {
            res.status(404).json({msg: "No existe servicio con esa id"});
        }
        encuestaconfigurada.fechaInicio = fechaInicio;
        encuestaconfigurada.fechaFinal = fechaFinal;
        encuestaconfigurada.titulo = titulo;
        encuestaconfigurada.poblacion = poblacion;
        encuestaconfigurada.articulo = articulo;
        encuestaconfigurada.nEncuestas = nEncuestas;
    }catch (error) {
        res.status(500).send("Hubo un error al editar una encuesta configurada");
    }
};*/

//Delete//
exports.eliminarEncuestaConfigurada = async (req, res) => {
    try{
        let encuestaconfigurada = await encuestaConfigurada.findById(req.params.id);
        if (!encuestaconfigurada){
            res.status(404).json({msg: "No existe la encuesta configurada con este id"})
        }
        await encuestaConfigurada.findByIdAndRemove({_id: req.params.id})
        res.json({msg: "Encuesta configurada eliminada con exito"});
    } catch (error) {
        res.status(500).send("Hubo un error al eliminar una encuesta configurada");
    }
};