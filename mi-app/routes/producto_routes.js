const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto_controller');

router.get('/', productoController.getProductos);
router.post('/', productoController.createProducto);

module.exports = router;
