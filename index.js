const express = require('express');
const conectarDB=require('./config/db')
const cors = require('cors');
const app=express();
//conectar a la base de datos
conectarDB()
app.use(cors());
app.use(express.json());
//Funciones de Martin




//Funciones de Ale
app.use('/api/servicio', require('./routes/servicio.js'))




//Funciones de Norma




//Funciones de Ana
app.listen(4000, ()=>{
    console.log('El servidor 4000 esta corriendo')
})