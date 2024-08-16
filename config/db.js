import { Sequelize } from "sequelize";

const nameDB = "agenciaviajes"
const user = "root"
const pass = ""
const port = 3306
const host = "localhost"

const db = new Sequelize(nameDB, user, pass, {
  host,
  port,
  dialect: "mysql",
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  },
  operatorsAliases: 0
});

export default db;