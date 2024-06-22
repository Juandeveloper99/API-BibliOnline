const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());

// Usar las rutas
app.use('/api/users', userRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
