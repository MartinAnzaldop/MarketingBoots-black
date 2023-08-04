const Solicitud = require('../models/Solicitud')

exports.crearSolicitud = async (req, res) => {
    try {
      let solicitud;
     solicitud = new Solicitud(req.body)
     await solicitud.save()
     res.send(solicitud)
    } catch (error) {
      res.status(500).send("Hubo un error al insertar un pedido");
    }
  };
 
  exports.editarSolicitud = async (req, res) => {
    try {
      const {usuario, empresa, direccion, contacto, encargado, categoria, nombreArticulo, precioArticulo, marcaArticulo, descripcionArticulo,
      fechaInicio, fechaFinal, titulo, objetivo, poblacion, numeroEncuesta, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6,
      pregunta7, pregunta8, pregunta9, pregunta10}=req.body;
       let solicitud = await Solicitud.findById(req.params.id);
       if(!solicitud){
        res.status(404).json({ msg: "No existe el producto con esa id"})
       }   
       solicitud.usuario=usuario;   
       solicitud.empresa=empresa; 
       solicitud.direccion=direccion;
       solicitud.contacto=contacto;
       solicitud.encargado=encargado;
       solicitud.categoria=categoria;
       solicitud.nombreArticulo=nombreArticulo;
       solicitud.precioArticulo=precioArticulo;
       solicitud.marcaArticulo=marcaArticulo;
       solicitud.descripcionArticulo=descripcionArticulo;
       solicitud.fechaInicio=fechaInicio;
       solicitud.fechaFinal=fechaFinal;
       solicitud.titulo=titulo;
       solicitud.objetivo=objetivo;
       solicitud.poblacion=poblacion;
       solicitud.numeroEncuesta=numeroEncuesta;
       solicitud.pregunta1 = pregunta1;
       solicitud.pregunta2 = pregunta2;
       solicitud.pregunta3 = pregunta3;
       solicitud.pregunta4 = pregunta4;
       solicitud.pregunta5 = pregunta5;
       solicitud.pregunta6 = pregunta6; 
       solicitud.pregunta7 = pregunta7;
       solicitud.pregunta8 = pregunta8;
       solicitud.pregunta9 = pregunta9;
       solicitud.pregunta10 = pregunta10,
       solicitud = await Solicitud.findOneAndUpdate({_id: req.params.id}, solicitud, {new:true})
       res.json(solicitud)

    } catch (error) { 
      res.status(500).send("Hubo un error al editar un producto");
    }
  }; 


  exports.consultarSolicitudes = async (req, res) => {
    try {
      const solicitudes= await Solicitud.find();
      res.json(solicitudes)
    } catch (error) {
      res.status(500).send("Hubo al consultar las solicitudes");
    }
  };

  exports.consultarSolicitudById = async (req, res) => {
    try {
      let solicitud = await Solicitud.findById(req.params.id);
      if(!solicitud){
          res.status(404).json({ msg: "No existe el pedido con esa id"})
        }
        res.json(solicitud);
    } catch (error) {
      res.status(500).send("Hubo un error al buscar por id un solicitud");
    }
  };

  exports.eliminarSolcitud = async (req, res) => {
    try {
      let solicitud = await Solicitud.findById(req.params.id);
        if(!solicitud){
            res.status(404).json({ msg: "No existe el solicitud con esa id"})
           }
           await Solicitud.findByIdAndRemove({_id: req.params.id})
           res.json({msg:"solicitud eliminado con exito"});

    } catch (error) {
      res.status(500).send("Hubo un error al eliminar un solicitud");
    }
  };