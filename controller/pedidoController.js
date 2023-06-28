const Pedido = require('../models/Pedido')
exports.crearPedido = async (req, res) => {
    try {
      let pedido;
     pedido = new Pedido(req.body)
     await pedido.save()
     res.send(pedido)
    } catch (error) {
      res.status(500).send("Hubo un error al insertar un pedido");
    }
  };

  exports.consultarPedidos = async (req, res) => {
    try {
      const pedidos= await Pedido.find();
      res.json(pedidos)
    } catch (error) {
      res.status(500).send("Hubo un error al insertar un producto");
    }
  };

  exports.consultarPedidoById = async (req, res) => {
    try {
      let pedido = await Pedido.findById(req.params.id);
      if(!pedido){
          res.status(404).json({ msg: "No existe el pedido con esa id"})
        }
        res.json(pedido);
    } catch (error) {
      res.status(500).send("Hubo un error al buscar por id un pedido");
    }
  };

  exports.eliminarPedido = async (req, res) => {
    try {
      let pedido = await Pedido.findById(req.params.id);
        if(!pedido){
            res.status(404).json({ msg: "No existe el pedido con esa id"})
           }
           await Pedido.findByIdAndRemove({_id: req.params.id})
           res.json({msg:"pedido eliminado con exito"});

    } catch (error) {
      res.status(500).send("Hubo un error al eliminar un pedido");
    }
  };

  exports.editarPedido = async (req, res) => {
    try {
      const {empresa, direccion, contacto, encargado, categoria, nombreArticulo, precioArticulo, marcaArticulo, descripcionArticulo}=req.body;
       let pedido = await Pedido.findById(req.params.id);
       if(!pedido){
        res.status(404).json({ msg: "No existe el producto con esa id"})
       }
       pedido.empresa=empresa;
       pedido.direccion=direccion;
       pedido.contacto=contacto;
       pedido.encargado=encargado;
       pedido.categoria=categoria;
       pedido.nombreArticulo=nombreArticulo;
       pedido.precioArticulo=precioArticulo;
       pedido.marcaArticulo=marcaArticulo;
       pedido.descripcionArticulo=descripcionArticulo;
       pedido = await Pedido.findOneAndUpdate({_id: req.params.id}, pedido, {new:true})
       res.json(pedido)

    } catch (error) {
      res.status(500).send("Hubo un error al editar un producto");
    }
  }; 