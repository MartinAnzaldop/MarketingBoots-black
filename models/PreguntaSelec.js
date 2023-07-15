const mongoose = require('mongoose');

const PreguntaSelecSchema = mongoose.Schema({
    
    pregunta1:{
        type: String,
        require:true
    },

    pregunta2:{
        type: String,
        require:true
    },

    pregunta3:{
        type: String,
        require:true
    },

    pregunta4:{
        type: String,
        require:true
    },

    pregunta5:{
        type: String,
        require:true
    },
    
    pregunta6:{
        type: String,
        require:true
    },
    
    pregunta7:{
        type: String,
        require:true
    },

    pregunta8:{
        type: String,
        require:true
    },

    pregunta9:{
        type: String,
        require:true
    },

    pregunta10:{
        type: String,
        require:true
    }
    
});

module.exports = mongoose.model('PreguntaSelec', PreguntaSelecSchema);