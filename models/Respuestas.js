const mongoose = require('mongoose');

const RespuestasSchema = mongoose.Schema({
    
    respuesta1:{
        type: String,
        require:true
    },

    respuesta2:{
        type: String,
        require:true
    },

    respuesta3:{
        type: String,
        require:true
    },

    respuesta4:{
        type: String,
        require:true
    },

    respuesta5:{
        type: String,
        require:true
    },
    respuesta6:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model('Respuestas', RespuestasSchema);