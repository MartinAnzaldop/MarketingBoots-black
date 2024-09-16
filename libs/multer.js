const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// Usa el método uuidv4 para generar un UUID
const uuida = uuidv4();
const path = require('path')

const storage= multer.diskStorage({
    destination:'uploads',
    filename:(req, file, cb)=>{
        cb(null, uuidv4()+path.extname(file.originalname))
    }
})

module.exports= multer({storage});   