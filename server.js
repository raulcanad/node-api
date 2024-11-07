const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware para manejar JSON
app.use(cors());// Permite todas las solicitudes desde cualquier origen
app.use(express.json());

// Fake database (arreglo en memoria)
let tasks = [];

// Endpoint para obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Endpoint para crear una nueva tarea
app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
