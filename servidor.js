// const express = require("express");
// const app = express();

// // Ruta para la raíz '/'
// app.get("/", (req, res) => {
//   res.send("¡Servidor Express funcionando!");
// });

// // Servidor escuchando en el puerto 3000
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });
import express from "express";
const servidor = express();

servidor.use(express.json());

servidor.get("/servidor/", (req, res) => {
  res.json({
    msg: "Servidor Funcionando",
  });
});

servidor.listen(8000, () => {
  console.log("Server corriendo en el puerto 8000");
});
