const mongoose= require('mongoose');

const ProductoSchema=mongoose.Schema({
nombre:{
    type: String,
    require:true
},
marca:{
    type: String,
    require:true
},
categoria:{
    type: String,
    require:true
},
precio:{
    type: Number,
    require:true
},
descripcion:{
    type: String,
    require:true
},
URLimagen:{
    type: String,
},
fechaCreacion:{ 
    type: Date,
    default: Date.now()
}, 
});


module.exports = mongoose.model('Producto', ProductoSchema);