"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const PersonaSchema = new Schema({
    nombres: {
        type: {
            nombre: { type: String },
            apellido: { type: String },
        },
        required: true,
    },
    edad: { type: Number, required: true },
    ciudad: { type: String, required: true },
    fechan: { type: Date, default: Date.now() },
    intereses: { type: Array },
}, { collection: "personas" });
PersonaSchema.methods.toJSON = function () {
    // eslint-disable-next-line no-unused-vars
    const _a = this.toObject(), { __v } = _a, object = __rest(_a, ["__v"]);
    return object;
};
exports.Persona = mongoose_1.default.model("Persona", PersonaSchema);
//# sourceMappingURL=persona.js.map