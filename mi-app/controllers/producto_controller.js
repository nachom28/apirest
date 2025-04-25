const productoService = require('../services/producto_service');

function getProductos(req, res) {
  const productos = productoService.obtenerProductos();
  res.json(productos);
}

function createProducto(req, res) {
  const { nombre, precio, categoria } = req.body;

  try {
    const nuevoProducto = productoService.agregarProducto({ nombre, precio, categoria });
    res.status(201).json({
      mensaje: 'Producto agregado',
      producto: nuevoProducto
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getProductos,
  createProducto
};