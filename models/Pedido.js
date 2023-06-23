const mongoose= require('mongoose');

const PedidoSchema=mongoose.Schema({
empresa:{
    type: String,
    require:true
},
direccion:{
    type: String,
    require:true
},
contacto:{
    type: String,
    require:true
},
encargado:{
    type: String,
    require:true
},
categoria:{
    type: String,
    require:true
},
nombreArticulo:{
    type: String,
},
precioArticulo:{
    type: Number,
    require:true
},
marcaArticulo:{
    type: String,
},
descripcionArticulo:{
    type: String,
},
fechaCreacion:{ 
    type: Date,
    default: Date.now()
}, 
});

module.exports = mongoose.model('Pedido', PedidoSchema);