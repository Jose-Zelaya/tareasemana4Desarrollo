"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCancionById = exports.editCancionById = exports.createCancion = exports.getCancionesByRango = exports.getCancionesByAnio = exports.getCancionesByNombre = exports.getCancionesById = exports.getCanciones = void 0;
const canciones_1 = require("../models/canciones");
const getCanciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield canciones_1.Cancion.find();
        res.status(200).json(respuesta);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});
exports.getCanciones = getCanciones;
const getCancionesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const { id } = req.params;
        const foundPersona = yield canciones_1.Cancion.findById(id);
        if (!foundPersona)
            return res.status(400).json({ msg: "No existe persona con ese Id" });
        res.status(200).json(foundPersona);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});
exports.getCancionesById = getCancionesById;
const getCancionesByNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const { nombre } = req.query;
        const response = yield canciones_1.Cancion.find({ nombre });
        res.status(200).json(response);
    }
    catch (err) {
        res.status(500).json({ msg: "Error en la base de datos" });
    }
});
exports.getCancionesByNombre = getCancionesByNombre;
const getCancionesByAnio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const { anio } = req.query;
        const response = yield canciones_1.Cancion.find({ anio: { $gte: 2010 } });
        res.status(200).json(response);
    }
    catch (err) {
        res.status(500).json({ msg: "Error en la base de datos" });
    }
});
exports.getCancionesByAnio = getCancionesByAnio;
const getCancionesByRango = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const { anio } = req.query;
        const response = yield canciones_1.Cancion.find({ anio1: { $gte: 2010 }, anio2: { $gte: 2010 } });
        res.status(200).json(response);
    }
    catch (err) {
        res.status(500).json({ msg: "Error en la base de datos" });
    }
});
exports.getCancionesByRango = getCancionesByRango;
const createCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCancion = new canciones_1.Cancion(req.body);
        const savedCancion = yield newCancion.save();
        res.status(201).json(savedCancion);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});
exports.createCancion = createCancion;
const editCancionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("editPersonaById");
    try {
        const { id } = req.params;
        console.log(id);
        console.log(req.body);
        const foundPersona = yield canciones_1.Cancion.findById(id);
        if (!foundPersona)
            return res.status(401).json({ msg: "Persona no encontrada" });
        const updatedPersona = yield canciones_1.Cancion.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(updatedPersona);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en la base de datos" });
    }
});
exports.editCancionById = editCancionById;
const deleteCancionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("deletePersonaById");
    try {
        const { id } = req.params;
        console.log(id);
        const foundPersona = yield canciones_1.Cancion.findById(id);
        if (!foundPersona)
            return res.status(401).json({ msg: "Persona no encontrada" });
        const response = yield canciones_1.Cancion.findByIdAndRemove(id);
        res.status(200).json({ msg: "Registro eliminado" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en la base de datos" });
    }
});
exports.deleteCancionById = deleteCancionById;
//# sourceMappingURL=canciones.js.map