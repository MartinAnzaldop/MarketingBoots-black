const mongoose = require('mongoose');

const ServicioSchema = mongoose.Schema({
    nombreSer:{
        type: String,
        require: true
    },

    empresa:{
        type: String,
        require: true
    },

    precio:{
        type: Number,
        require: true
    },
    
        categoria:{
        type: String,
        require: true
    },

    descripcion:{
        type: String,
        require:true
    },
    imagen:{
        type: String,
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }, 
    
});

module.exports = mongoose.model('Servicio', ServicioSchema);
