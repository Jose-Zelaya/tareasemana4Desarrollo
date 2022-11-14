"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express');
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
const canciones_1 = __importDefault(require("./routes/canciones"));
const config_1 = require("./database/config");
dotenv_1.default.config();
//npm i --save-dev @types/express
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use((0, cors_1.default)());
(0, config_1.connectDB)();
//routes
app.use("/api/usuarios", usuarios_1.default);
app.use('/api/canciones', canciones_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get("/about", (req, res) => {
    res.send("Hola mundo TypeScript");
});
//# sourceMappingURL=app.js.map