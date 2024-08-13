import express from "express";
import router from "./routes/app.js";

const app = express()

//Definir el puerto
const port = process.env.PORT ?? 4000

app.use("/", router)

//Escuchamos en el puerto colocando el puerto y un callBack para imprimirlo
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
})