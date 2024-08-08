const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const authRoutes = require('./routes/authRoutes');

// Usar rutas
app.use('/auth', authRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
