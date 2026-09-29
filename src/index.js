const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const tasks = [
  { id: 1, title: "Aprender Express", done: true },
  { id: 2, title: "Crear mi primera API", done: false },
  { id: 3, title: "Practicar rutas con parámetros", done: false },
];

// GET / -> mensaje
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de tareas" });
});

// GET /tasks -> lista de tareas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id -> una tarea
app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  res.json(task);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
