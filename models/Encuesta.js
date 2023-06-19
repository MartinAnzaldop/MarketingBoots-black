const mongoose = require('mongoose');

const EncuestaSchema = mongoose.Schema({
    
    pregunta1:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model('Encuesta', EncuestaSchema);