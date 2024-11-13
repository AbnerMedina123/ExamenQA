const express = require('express');
const router = express.Router();
const db = require('../data/database');

// Obtener todos los cursos
router.get('/', (req, res) => {
  db.all('SELECT * FROM cursos', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// Crear un nuevo curso
router.post('/', (req, res) => {
  const { nombre, descripcion } = req.body;
  db.run(
    'INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Actualizar un curso existente
router.put('/:id', (req, res) => {
  const { nombre, descripcion } = req.body;
  const { id } = req.params;
  db.run(
    'UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?',
    [nombre, descripcion, id],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ updatedID: id });
    }
  );
});

// Eliminar un curso
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM cursos WHERE id = ?', id, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(204).send();
  });
});

module.exports = router;
