const mongoose = require('mongoose');

const RespuestasSchema = mongoose.Schema({
    nombre:{
        type: String,
        require:true
    },
    edad:{
        type: Number,
        require:true
    },
    ubicacion:{
        type: String,
        require:true
    },
    empresa:{
        type: String,
        require:true
    },
    direccion:{
        type: String,
        require:true
    },
    nombreArticulo:{
        type: String,
        require:true
    },
    precioArticulo:{
        type: Number,
        require:true
    },
    ubicacion:{
        type: String,
        require:true
    },
    marcaArticulo:{
        type: String,
        require:true
    },
    titulo:{
        type: String,
        require:true
    },
    respuesta1:{
        type: Number,
        require:true
    },
    pregunta2:{
        type: String,
        require:true
    },
    respuesta2:{
        type: Number,
        require:true
    },
    pregunta3:{
        type: String,
        require:true
    },
    respuesta3:{
        type: Number,
        require:true
    },
    pregunta4:{
        type: String,
        require:true
    },
    respuesta4:{
        type: Number,
        require:true
    },
    pregunta5:{
        type: String,
        require:true
    },
    respuesta5:{
        type: Number,
        require:true
    },
    pregunta6:{
        type: String,
        require:true
    },
    respuesta6:{
        type: Number,
        require:true
    },
    pregunta7:{
        type: String,
        require:true
    },
    respuesta7:{
        type: Number,
        require:true
    },
    pregunta8:{
        type: String,
        require:true
    },
    respuesta8:{
        type: Number,
        require:true
    },
    pregunta9:{
        type: String,
        require:true
    },
    respuesta9:{
        type: Number,
        require:true
    },
    pregunta10:{
        type: String,
        require:true
    },
    respuesta10:{
        type: Number,
        require:true
    }
    
});

module.exports = mongoose.model('Respuestas', RespuestasSchema);