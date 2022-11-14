import { Request, Response } from "express";
import { Cancion } from "../models/canciones"; 

export const getCanciones = async (req: Request, res: Response) => {
  try {
    const respuesta = await Cancion.find();
    res.status(200).json(respuesta);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

export const getCancionesById = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const foundPersona = await Cancion.findById(id);
    if (!foundPersona)
      return res.status(400).json({ msg: "No existe persona con ese Id" });
    res.status(200).json(foundPersona);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error en el servidor" });
  }
}; 

export const getCancionesByNombre = async (req: Request, res: Response) => {
  try {
    console.log(req.query);
    const { nombre } = req.query;
    const response = await Cancion.find({ nombre });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: "Error en la base de datos" });
  }
}; 

export const getCancionesByAnio = async (req: Request, res: Response) => {
  try {
    console.log(req.query);
    const { anio } = req.query;
    const response = await Cancion.find({ anio : { $gte: 2010 } });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: "Error en la base de datos" });
  }
}; 

export const getCancionesByRango = async (req: Request, res: Response) => {
  try {
    console.log(req.query);
    const { anio } = req.query;
    const response = await Cancion.find({ anio1 : { $gte: 2010 },  anio2 : { $gte: 2010 } });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: "Error en la base de datos" });
  }
};

export const createCancion = async (req: Request, res: Response) => {
  try {
    const newCancion = new Cancion(req.body); 
        const savedCancion = await newCancion.save();
        res.status(201).json(savedCancion);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

export const editCancionById = async (req: Request, res: Response) => {
  console.log("editPersonaById");
  try {
    const { id } = req.params;
    console.log(id);
    console.log(req.body);
    const foundPersona = await Cancion.findById(id);
    if (!foundPersona)
      return res.status(401).json({ msg: "Persona no encontrada" });

    const updatedPersona = await Cancion.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPersona);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error en la base de datos" });
  }
};

export const deleteCancionById = async (req: Request, res: Response) => {
  console.log("deletePersonaById");
  try {
    const { id } = req.params;
    console.log(id);
    const foundPersona = await Cancion.findById(id);
    if (!foundPersona)
      return res.status(401).json({ msg: "Persona no encontrada" });

    const response = await Cancion.findByIdAndRemove(id);
    res.status(200).json({ msg: "Registro eliminado" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error en la base de datos" });
  }
};