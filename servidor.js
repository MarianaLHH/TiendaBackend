import express from "express";
import mongoose from "mongoose"; //Conectandonos a la base de datos

//EVENTOS
mongoose.connection.on("connected", () => {
  console.log(`Conectado a la base de datos`);
});
mongoose.connection.on("error", () => {
  console.log("Error en la conexion a base de datos");
});
mongoose.connect(
  "mongodb+srv://laurahilari96:UEtuub7fT1NIfthW@tienda.26zx6.mongodb.net/?ssl=true&retryWrites=true&w=majority"
);

const PORT = 8000;
const servidor = express();

servidor.use(express.json()); //

servidor.get("/servidor/", (req, res) => {
  res.json({
    msg: "Servidor Funcionando",
  });
});

servidor.listen(PORT, () => {
  console.log("Server corriendo en el puerto 8000");
});
