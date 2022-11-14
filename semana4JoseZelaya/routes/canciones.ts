import { Router } from "express";
import { getCanciones, getCancionesById, getCancionesByNombre, getCancionesByAnio, getCancionesByRango, createCancion, editCancionById, deleteCancionById } from '../controllers/canciones';

const router = Router();

router.get("/", getCanciones);
router.get("/:id", getCancionesById) 
router.get('/byNombre',getCancionesByNombre)
router.get('/byAnio',getCancionesByAnio);
router.get('/byRango', getCancionesByRango);  
router.post('/', createCancion); 
router.put("/editbyID", editCancionById);
router.delete('/:id',deleteCancionById);

export default router;