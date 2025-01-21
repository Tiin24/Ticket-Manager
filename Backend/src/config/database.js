import Sequelize from "sequelize";
import { config } from 'dotenv'
config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

export const sequelize = new Sequelize(DB_USER, DB_NAME, DB_PASSWORD, {
  host: DB_HOST || "localhost",
  port: DB_PORT || 5432,
  dialect: "postgres",
  logging: false, // Desactiva logs de Sequelize (opcional)
    dialectOptions: {
      ssl: {
        require: true, // Obliga el uso de SSL
        rejectUnauthorized: false, // Acepta certificados SSL auto-firmados
      },
    },
});
