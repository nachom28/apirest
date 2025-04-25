const express = require('express');
const app = express();
const productoRoutes = require('./routes/producto_routes');

app.use(express.json());
app.use('/productos', productoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});