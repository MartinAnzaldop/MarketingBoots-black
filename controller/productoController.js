const Producto = require('../models/Producto.js');

//Peticion Post
exports.crearProducto= async (req, res)=>{
 try {
     let producto;
     producto = new Producto(req.body);
     await producto.save();
     res.send(producto)
 } catch (error) {
    res.status(500).send('Hubo un error al insertar un producto');
 }
}

//Peticion Get
exports.consultarProductos= async (req, res)=>{
    try {
        const productos= await Producto.find();
        res.json(productos)
    } catch (error) {
       res.status(500).send('Hubo un error al insertar un producto');
    }
   }