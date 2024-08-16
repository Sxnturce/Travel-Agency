import express from "express";
import router from "./routes/app.js";
import db from "./config/db.js";

const app = express()

//Conectar la db

db.authenticate()
  .then(() => console.log("Conexion exitosa"))
  .catch(e => {
    throw new Error(`Error al intentar conectar la db ${e}`)
  })


//Definir el puerto
const port = process.env.PORT ?? 4000

//Habilitar pug
app.set("view engine", "pug")

//Optener el año actual
app.use((req, res, next) => {
  res.locals.year = new Date().getFullYear();
  res.locals.name = "Agencia de Viajes"
  next()
})

//Agregamos un router
app.use("/", router)

//Agregamos una carpeta publica
app.use(express.static("public"))

//Escuchamos en el puerto colocando el puerto y un callBack para imprimirlo
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
})