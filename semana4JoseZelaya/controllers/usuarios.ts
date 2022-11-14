import { Request, Response } from "express";

export const getUsuarios = (req: Request, res: Response)=>{
    res.send('Respuesta del servidor')
}

export const getUsuarioById = (req: Request, res: Response)=>{
    res.send('Respuesta del servidor con id ' + req.params.id)
}