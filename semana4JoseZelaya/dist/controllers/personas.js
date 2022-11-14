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
exports.deletePersonaById = exports.editPersonaById = exports.createPersona = exports.getPersonasByCiudad = exports.getPersonasById = exports.getPersonas = void 0;
const persona_1 = require("../models/persona");
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield persona_1.Persona.find();
        res.status(200).json(respuesta);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});
exports.getPersonas = getPersonas;
const getPersonasById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const { id } = req.params;
        const foundPersona = yield persona_1.Persona.findById(id);
        if (!foundPersona)
            return res.status(400).json({ msg: "No existe persona con ese Id" });
        res.status(200).json(foundPersona);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});
exports.getPersonasById = getPersonasById;
const getPersonasByCiudad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const { ciudad } = req.query;
        const response = yield persona_1.Persona.find({ ciudad });
        res.status(200).json(response);
    }
    catch (err) {
        res.status(500).json({ msg: "Error en la base de datos" });
    }
});
exports.getPersonasByCiudad = getPersonasByCiudad;
const createPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPersona = new persona_1.Persona(req.body);
        const savedPersona = yield newPersona.save();
        res.status(201).json(savedPersona);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});
exports.createPersona = createPersona;
const editPersonaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("editPersonaById");
    try {
        const { id } = req.params;
        console.log(id);
        console.log(req.body);
        const foundPersona = yield persona_1.Persona.findById(id);
        if (!foundPersona)
            return res.status(401).json({ msg: "Persona no encontrada" });
        const updatedPersona = yield persona_1.Persona.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(updatedPersona);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en la base de datos" });
    }
});
exports.editPersonaById = editPersonaById;
const deletePersonaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("deletePersonaById");
    try {
        const { id } = req.params;
        console.log(id);
        const foundPersona = yield persona_1.Persona.findById(id);
        if (!foundPersona)
            return res.status(401).json({ msg: "Persona no encontrada" });
        const response = yield persona_1.Persona.findByIdAndRemove(id);
        res.status(200).json({ msg: "Registro eliminado" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error en la base de datos" });
    }
});
exports.deletePersonaById = deletePersonaById;
//# sourceMappingURL=personas.js.map