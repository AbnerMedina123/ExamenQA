const express = require('express');
const router = express.Router();
const db = require('../data/database');

// Obtener todos los estudiantes
router.get('/', (req, res) => {
  db.all('SELECT * FROM estudiantes', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// Crear un nuevo estudiante
router.post('/', (req, res) => {
  const { nombre, edad, correo } = req.body;
  db.run(
    'INSERT INTO estudiantes (nombre, edad, correo) VALUES (?, ?, ?)',
    [nombre, edad, correo],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Otras rutas para actualizar y eliminar estudiantes...

module.exports = router;
