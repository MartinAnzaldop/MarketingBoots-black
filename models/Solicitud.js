const mongoose= require('mongoose');

const SolicitudSchema=mongoose.Schema({
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

fechaInicio:{
    type:String,
    require:true
},
fechaFinal:{
    type:String,
    require:true
},
titulo:{
    type:String,
},
objetivo:{
    type:String,
},
poblacion:{
    type:String,
    require:true
},
numeroEncuesta:{
    type:Number,
    require: true
},
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

module.exports = mongoose.model('Solicitud', SolicitudSchema);