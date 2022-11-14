import { Router, Request, Response } from "express";
import { getUsuarioById, getUsuarios } from "../controllers/usuarios";

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuarioById);

export default router;
