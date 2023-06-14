const Producto = require("../models/Producto.js");
const path = require("path");
const fs = require("fs-extra");

//Peticion Post
exports.crearProducto = async (req, res) => {
  try {
    const { nombre, marca, categoria, precio, descripcion } = req.body;
    const newproducto = {
      nombre: nombre,
      marca: marca,
      categoria: categoria,
      precio: precio,
      descripcion: descripcion,
      URLimagen: req.file.path,
    };
    const producto = new Producto(newproducto);

    await producto.save();
    res.send(producto);
  } catch (error) {
    res.status(500).send("Hubo un error al insertar un producto");
  }
};

//Peticion Get
exports.consultarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).send("Hubo un error al consultar los productos");
  }
};

//Peticion Put
exports.editarProducto = async (req, res) => {
  try {
    const { nombre, marca, categoria, precio, descripcion, URLimagen } =
      req.body;
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: "No existe el producto con esa id" });
    }
    producto.nombre = nombre;
    producto.marca = marca;
    producto.categoria = categoria;
    producto.precio = precio;
    producto.descripcion = descripcion;
    producto.URLimagen = URLimagen;
    producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      producto,
      { new: true }
    );
    res.json(producto);
  } catch (error) {
    res.status(500).send("Hubo un error al editar un producto ");
  }
};

//Peticion Get /:id
exports.consultarProductoById = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: "No existe el producto con esa id" });
    }
    res.json(producto);
  } catch {
    res.status(500).send("Hubo un error al consultar un producto por ID");
  }
};

//Peticion Delete
exports.eliminarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);
    if (producto) {
      await fs.unlink(path.resolve(producto.URLimagen));
    }
    if (!producto) {
      res.status(404).json({ msg: "No existe el producto con esa id" });
    }
    await Producto.findByIdAndRemove({ _id: req.params.id });
    res.json({ msg: "producto eliminado con exito" });
  } catch {
    res.status(500).send("Hubo un error al eliminar un producto");
  }
};
