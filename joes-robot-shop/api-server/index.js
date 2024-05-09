const express = require("express");
const app = express();
const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("¡Hola mundo desde el servidor API!");
});

app.listen(PORT, () => {
  console.log(`Servidor API corriendo en el puerto ${PORT}`);
});
