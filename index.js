const express = require("express");
const app = express();
const PORT = 5000;

// ✅ El middleware debe estar aquí, en la parte de arriba
app.use(express.json());

// "Base de datos" en memoria
const usuarios = [
  // ... tus usuarios
];

// --- RUTAS ---
// Ahora sí, definimos las rutas después del middleware
app.get("/usuarios", (req, res) => {
  // ...
});

app.post("/usuarios", (req, res) => {
  // Ahora req.body sí existirá
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    profesion: req.body.profesion,
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
