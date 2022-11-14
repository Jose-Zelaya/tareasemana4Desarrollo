//const express = require('express');
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/usuarios";
import cancionesRoutes from "./routes/canciones";
import { connectDB } from './database/config';
dotenv.config();

//npm i --save-dev @types/express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

connectDB();

//routes
app.use("/api/usuarios", userRoutes);
app.use('/api/canciones',cancionesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/about", (req: Request, res: Response) => {
  res.send("Hola mundo TypeScript");
});
