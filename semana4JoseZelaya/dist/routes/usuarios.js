"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get("/", usuarios_1.getUsuarios);
router.get("/:id", usuarios_1.getUsuarioById);
exports.default = router;
//# sourceMappingURL=usuarios.js.map