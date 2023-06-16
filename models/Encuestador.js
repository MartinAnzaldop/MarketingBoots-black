const mongoose = require('mongoose');

const EncuestadorSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },

    edad:{
        type: Number,
        require:true
    },

    sexo:{
        type: String,
        require:true
    },

    imagen:{
        type: String,
    },

    correoElect:{
        type: String,
        require: true
    },

    contraseña:{
        type: String,
        require:true
    },
    
});

module.exports = mongoose.model('Encuestador', EncuestadorSchema);