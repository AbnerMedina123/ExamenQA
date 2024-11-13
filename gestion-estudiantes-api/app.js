const express = require('express');
const bodyParser = require('body-parser');
const estudiantesRouter = require('./routes/estudiantes');
const profesoresRouter = require('./routes/profesores');
const cursosRouter = require('./routes/cursos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/estudiantes', estudiantesRouter);
app.use('/api/profesores', profesoresRouter);
app.use('/api/cursos', cursosRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
