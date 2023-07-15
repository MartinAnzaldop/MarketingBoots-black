const mongoose = require('mongoose');

const BancoPreguSchema = mongoose.Schema({
    
    pregunta:{
        type: String,
        require:true
    },
    
    categoria:{
        type: String,
        require:true
    },

    opcion:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model('BancoPregu', BancoPreguSchema);