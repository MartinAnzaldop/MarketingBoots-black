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