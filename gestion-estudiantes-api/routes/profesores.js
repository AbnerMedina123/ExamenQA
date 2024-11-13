const express = require('express');
const router = express.Router();
const db = require('../data/database');

// Obtener todos los profesores
router.get('/', (req, res) => {
  db.all('SELECT * FROM profesores', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// Crear un nuevo profesor
router.post('/', (req, res) => {
  const { nombre, especialidad } = req.body;
  db.run(
    'INSERT INTO profesores (nombre, especialidad) VALUES (?, ?)',
    [nombre, especialidad],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Actualizar un profesor existente
router.put('/:id', (req, res) => {
  const { nombre, especialidad } = req.body;
  const { id } = req.params;
  db.run(
    'UPDATE profesores SET nombre = ?, especialidad = ? WHERE id = ?',
    [nombre, especialidad, id],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ updatedID: id });
    }
  );
});

// Eliminar un profesor
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM profesores WHERE id = ?', id, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(204).send();
  });
});

module.exports = router;
