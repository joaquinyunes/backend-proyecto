import dotenv from "dotenv";
dotenv.config();
//esto le dice a node que lea las variables del .env secretas y las opreoare
import Express, { Request, response, Response } from "express";
import mongoose from "mongoose";

//IMPORTACION DE LA BASE DE DATOS
import UsuarioModel from "./models/usuarios.model";

//IMPORTACION PARA CREAR LOS SERVICIOS
import ServicioModel from "./models/servicio.model";

const app = Express();
const PORT = 5000;
// --- Middlewares (El "traductor") ---
app.use(Express.json()); // <--- ¡DEBE ESTAR AQUÍ ARRIBA!

async function conectarDB() {
  try {
    //intentamos que se conecte xd
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("base de datos conectada exitosamente");
  } catch (error) {
    console.error("error al conectar con la base de datos", error);
    process.exit(1);
  }
}
// --- Función para iniciar el servidor ---

async function iniciarServidor() {
  //esperamos aca a que se conecte la funcion de la base de datos
  await conectarDB();

  //ACA iniciamos el serivdor
  app.listen(PORT, () => {
    console.log(`servidor corriendo en https://locaclhost:${PORT}`);
  });
}

//--- rutas
app.get("/usuarios", async (req: Request, res: Response) => {
  try {
    const usuariosDB = await UsuarioModel.find();
    res.json(usuariosDB);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
});

app.post("/usuarios", async (req: Request, res: Response) => {
  // Código antiguo con el array falso
  try {
    const { nombre, profesion, telefono } = req.body;

    const nuevoUsuario = new UsuarioModel({
      nombre,
      profesion,
      telefono,
    });

    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.log(
      "ocurrio un errror al obtener los usuarios de la base de datos",
      error
    );
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
});

//ACA ARRANCAMOS TODO
iniciarServidor();

app.get("/servicios", async (req: Request, res: Response) => {
  try {
    const tipoServicio = await ServicioModel.find();
    res.json(tipoServicio);
  } catch (error) {
    console.error("Error al obtener servicios", error);
    res.status(500).json({ mensaje: "error al interno" });
  }
});

app.post("/servicios", async (req: Request, res: Response) => {
  try {
    const { nombre, precio, duracion } = req.body;
    const nuevoServicio = new ServicioModel({
      nombre,
      precio,
      duracion,
    });
    await nuevoServicio.save();
    res.status(201).json(nuevoServicio);
  } catch (error) {
    console.log("ocurrio un error al obtener datos", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
});
