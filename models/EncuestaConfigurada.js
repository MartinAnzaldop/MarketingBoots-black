const mongoose = require('mongoose');

const encuestaConfiguradaSchema = mongoose.Schema({
    fechaInicio:{
        type:String,
        require:true
    },
    fechaFinal:{
        type:String,
        require:true
    },
    titulo:{
        type:String,
       
    },
    poblacion:{
        type:String,
        require:true
    },
    articulo:{
        type:String,
        require: true
    },
    numeroEncuesta:{
        type:Number,
        require: true
    },
});

module.exports = mongoose.model('EncuestaConfigurada', encuestaConfiguradaSchema);