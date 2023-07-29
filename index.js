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


app.use('/api/solicitud', require('./routes/solicitud.js'))

//Funciones de Ale


 


//Funciones de Norma 

app.use('/api/respuestas', require('./routes/respuestas.js'))



//Funciones de Ana
app.use('/api/preguntaSelec', require('./routes/preguntaSelec.js'))
app.use('/api/bancoPregu', require('./routes/bancoPregu.js'))



app.listen(4000, ()=>{
    console.log('El servidor 4000 esta corriendo')
})
