import mongoose from "mongoose";
const { Schema } = mongoose;

const CancionSchema = new Schema(
  {
    nombre: { type: String },
    artista: { type: String},
    album: { type: String},
    anio: { type: Number},
    Pais: { type: String},
  },
  { collection: "canciones" }
);


export const Cancion = mongoose.model("Cancion", CancionSchema);