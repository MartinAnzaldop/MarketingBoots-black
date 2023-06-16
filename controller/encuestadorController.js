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