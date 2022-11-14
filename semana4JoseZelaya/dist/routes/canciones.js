"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const canciones_1 = require("../controllers/canciones");
const router = (0, express_1.Router)();
router.get("/", canciones_1.getCanciones);
router.get("/:id", canciones_1.getCancionesById);
router.get('/byNombre', canciones_1.getCancionesByNombre);
router.get('/byAnio', canciones_1.getCancionesByAnio);
router.get('/byRango', canciones_1.getCancionesByRango);
router.post('/', canciones_1.createCancion);
router.put("/editbyID", canciones_1.editCancionById);
router.delete('/:id', canciones_1.deleteCancionById);
exports.default = router;
//# sourceMappingURL=canciones.js.map