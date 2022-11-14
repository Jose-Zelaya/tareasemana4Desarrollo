"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarioById = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.send('Respuesta del servidor');
};
exports.getUsuarios = getUsuarios;
const getUsuarioById = (req, res) => {
    res.send('Respuesta del servidor con id ' + req.params.id);
};
exports.getUsuarioById = getUsuarioById;
//# sourceMappingURL=usuarios.js.map