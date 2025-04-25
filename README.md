# apirest
1) es una api rest por que :
Usa rutas claras como /productos.
Usa métodos HTTP: GET para leer, POST para crear.
Devuelve respuestas en JSON.
Cada petición funciona por sí sola (sin depender de otras).
Separa el cliente (quien pide) del servidor (quien responde).

2)Qué cambió con respecto al diseño anterior?
Antes: todo estaba mezclado en app.js (rutas y lógica).
Ahora: cada parte está en su carpeta:
routes/: define las rutas.
controllers/: recibe los pedidos.
services/: tiene la lógica.
repositories/: maneja los datos.
