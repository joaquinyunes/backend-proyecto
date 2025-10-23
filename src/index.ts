import Express, { Request, response, Response } from "express";
import { usuario } from "./usuario";
import { request } from "node:http";

const app = Express();
const PORT = 5000;

app.use(Express.json());

// "Base de datos" en memoria, ahora usando nuestra Clase

const usuarios: usuario[] = [
  new usuario(1, "joaquin", "programador"),
  new usuario(2, "gonzalo", "analista"),
  new usuario(3, "agustin", "disenio"),
];

//--- rutas

app.get("/usuarios", (req: Request, res: Response) => {
  const idUsuario = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === idUsuario);

  if (!usuario) {
    return res.status(404).json({ mensaje: "usuario no encontrado" });
  }
  res.json(usuario);
});

app.post("/usuarios/:id", (req: Request, res: Response) => {});
