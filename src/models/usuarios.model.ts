import { Schema, model } from "mongoose";

// 1. Definimos el Esquema (las reglas)
// Esto reemplaza nuestra antigua 'clase' de TypeScript.
const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true, // El nombre es obligatorio
  },
  profesion: {
    type: String,
    required: false, // La profesión es opcional (podemos borrar esto después)
  },
  telefono: {
    type: Number,
    required: true,
  },
  // Aquí agregaremos luego el 'telefono' para WhatsApp, 'rol', etc.
});

// 2. Creamos el Modelo (el objeto para interactuar con la DB)
// Mongoose creará automáticamente una colección llamada 'usuarios' (en plural)
// en nuestra base de datos MongoDB.
const UsuarioModel = model("Usuario", usuarioSchema);

export default UsuarioModel;
