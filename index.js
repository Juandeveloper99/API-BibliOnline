const express = require('express');
const connectDB = require('./db');

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());

// Definir tus rutas
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



