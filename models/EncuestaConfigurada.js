const mongoose = require('mongoose');

const encuestaConfiguradaSchema = mongoose.Schema({
    fechaInicio:{
        type:Date,
        require:true
    },
    fechaFinal:{
        type:Date,
        require:true
    },
    titulo:{
        type:String,
        require:true
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