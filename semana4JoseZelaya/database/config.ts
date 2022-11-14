import mongoose from "mongoose";

export const connectDB = async () => {
  const defaultConnection = "mongodb://localhost:27017/vanguardiadb";
  const dbConnection = process.env.MONGODBCONN || defaultConnection;
  try {
    await mongoose.connect(dbConnection); //asincrona
    console.log("Connected to the database");
  } catch (err) {
    console.log("Couldnt connect to the database");
  }
};
