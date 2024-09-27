const BancoPregu = require('../models/BancoPregu.js');

//Peticion id//
exports.consultarBancoPreguById= async (req, res)=>{
    try {
        let bancoPregu = await BancoPregu.findById(req.params.id);
        if(!bancoPregu){
            res.status(404).json({ msg: "No existe una pregunta con esa id"})
           }
           res.json(bancoPregu);
    } catch{ 
       res.status(500).send('Error al consultar la pregunta por id');
    }
   }; 


//Peticion Post//
exports.crearBancoPregu = async (req, res) => {
    try {
      const {pregunta, categoria} = req.body;
      const newbancopregu = {
        pregunta: pregunta,
        categoria: categoria,
      };
      const bancoPregu = new BancoPregu(newbancopregu);
  
      await bancoPregu.save();
      res.send(bancoPregu);
    } catch (error) {
      res.status(500).send("Hubo un error al insertar una pregunta");
    }
  };


//Peticion Get//
exports.consultarBancoPregu= async (req, res)=>{
    try {
        const bancoPregu = await BancoPregu.find();
        res.json(bancoPregu)
    } catch (error) {
       res.status(500).send('Error al consultar pregunta');
    }
   };


//Peticion Put//
exports.editarBancoPregu = async (req, res)=>{
    try {
       const {pregunta, categoria}=req.body;
       let bancoPregu = await BancoPregu.findById(req.params.id);
       if(!bancoPregu){
        res.status(404).json({ msg: "No existe una pregunta con esa id"})
       }
       bancoPregu.pregunta = pregunta;
       bancoPregu.categoria = categoria;
       bancoPregu = await BancoPregu.findOneAndUpdate({_id: req.params.id}, bancoPregu, {new:true})
       res.json(bancoPregu);
    } catch (error) {
       res.status(500).send('Error al editar una pregunta');
    }
};


//Peticion Delete//
exports.eliminarBancoPregu= async (req, res)=>{
    try {
        let bancoPregu = await BancoPregu.findById(req.params.id);
        if(!bancoPregu){
            res.status(404).json({ msg: "No existe esta pregunta con id"})
           }
           await BancoPregu.findByIdAndRemove({_id: req.params.id})
           res.json({msg:"Pregunta eliminada con exito"});
    } catch{
       res.status(500).send('Error al eliminar una pregunta');
    }
};
