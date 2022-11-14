"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancion = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const CancionSchema = new Schema({
    nombre: { type: String },
    artista: { type: String },
    album: { type: String },
    anio: { type: Number },
    Pais: { type: String },
}, { collection: "canciones" });
exports.Cancion = mongoose_1.default.model("Cancion", CancionSchema);
//# sourceMappingURL=canciones.js.map