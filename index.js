const express = require('express');
const conectarDB=require('./config/db')
const cors = require('cors');
const app=express();
const path = require('path');

//conectar a la base de datos
conectarDB()
app.use(cors());
app.use(express.json());
//Funciones de Martin
app.use('/api/producto', require('./routes/producto.js'))
app.use('/upload', express.static(path.resolve('uploads')))

//Funciones de Ale
app.use('/api/servicio', require('./routes/servicio.js'))




//Funciones de Norma




//Funciones de Ana
app.listen(4000, ()=>{
    console.log('El servidor 4000 esta corriendo')
})
