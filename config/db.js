import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();

const db = new Sequelize(process.env.DB_URL, {
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