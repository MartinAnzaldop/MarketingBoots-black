const PreguntaSelec = require('../models/PreguntaSelec.js');

//Peticion id//
exports.consultarPreguntaSelecById= async (req, res)=>{
    try {
        let preguntaSelec = await PreguntaSelec.findById(req.params.id);
        if(!preguntaSelec){
            res.status(404).json({ msg: "No existe una pregunta con esa id"})
           }
           res.json(preguntaSelec);
    } catch{ 
       res.status(500).send('Error al consultar la pregunta por id');
    }
   }; 


//Peticion Post//
exports.crearPreguntaSelec = async (req, res) => {
    try {
      const {pregunta1, pregunta2, pregunta3, pregunta4, pregunta5,
        pregunta6, pregunta7, pregunta8, pregunta9, pregunta10} = req.body;
      const newpreguntaselec = {
        pregunta1: pregunta1,
        pregunta2: pregunta2,
        pregunta3: pregunta3,
        pregunta4: pregunta4,
        pregunta5: pregunta5,
        pregunta6: pregunta6,
        pregunta7: pregunta7,
        pregunta8: pregunta8,
        pregunta9: pregunta9,
        pregunta10: pregunta10,
      };
      const preguntaSelec = new PreguntaSelec(newpreguntaselec);
  
      await preguntaSelec.save();
      res.send(preguntaSelec);
    } catch (error) {
      res.status(500).send("Hubo un error al insertar una pregunta");
    }
  };


//Peticion Get//
exports.consultarPreguntaSelec= async (req, res)=>{
    try {
        const preguntaSelec = await PreguntaSelec.find();
        res.json(preguntaSelec)
    } catch (error) {
       res.status(500).send('Error al consultar pregunta');
    }
   };


//Peticion Put//
exports.editarPreguntaSelec = async (req, res)=>{
    try {
       const {pregunta1, pregunta2, pregunta3, pregunta4, pregunta5,
        pregunta6, pregunta7, pregunta8, pregunta9, pregunta10}=req.body;
       let preguntaSelec = await PreguntaSelec.findById(req.params.id);
       if(!preguntaSelec){
        res.status(404).json({ msg: "No existe una pregunta con esa id"})
       }
       preguntaSelec.pregunta1 = pregunta1;
       preguntaSelec.pregunta2 = pregunta2;
       preguntaSelec.pregunta3 = pregunta3;
       preguntaSelec.pregunta4 = pregunta4;
       preguntaSelec.pregunta5 = pregunta5;
       preguntaSelec.pregunta6 = pregunta6;
       preguntaSelec.pregunta7 = pregunta7;
       preguntaSelec.pregunta8 = pregunta8;
       preguntaSelec.pregunta9 = pregunta9;
       preguntaSelec.pregunta10 = pregunta10,
       preguntaSelec = await PreguntaSelec.findOneAndUpdate({_id: req.params.id}, preguntaSelec, {new:true})
       res.json(preguntaSelec);
    } catch (error) {
       res.status(500).send('Error al editar una pregunta');
    }
};


//Peticion Delete//
exports.eliminarPreguntaSelec= async (req, res)=>{
    try {
        let preguntaSelec = await PreguntaSelec.findById(req.params.id);
        if(!preguntaSelec){
            res.status(404).json({ msg: "No existe esta pregunta con id"})
           }
           await PreguntaSelec.findByIdAndRemove({_id: req.params.id})
           res.json({msg:"Pregunta eliminada con exito"});
    } catch{
       res.status(500).send('Error al eliminar una pregunta');
    }
};
