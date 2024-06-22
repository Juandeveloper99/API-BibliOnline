const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = new User({ name, email, password });

    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

module.exports = router;
