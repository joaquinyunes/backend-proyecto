import { Schema, model } from "mongoose";

const servicioSchema = new Schema({
  nombre: {
    type: String,
    required: true, // El nombre es obligatorio
  },
  precio: {
    type: Number,
    required: true, // La profesión es opcional (podemos borrar esto después)
  },
  duracion: {
    type: Number,
    required: true,
  },
  // Aquí agregaremos luego el 'telefono' para WhatsApp, 'rol', etc.
});
const ServicioModel = model("Servicio", servicioSchema);

export default ServicioModel;
