import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Ticket = sequelize.define("Ticket", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  difficultyLevel: {
    type: DataTypes.ENUM("facil", "medio", "dificil"),
    allowNull: false,
  },
  gifUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("open", "in_progres", "closed"),
    allowNull: false,
    defaultValue: "open",
  },
  createdAt: {
    type: DataTypes.DATE,
    get() {
      const rawValue = this.getDataValue("createdAt");
      return rawValue ? rawValue.toISOString().split("T")[0] : null;
    },
  },
});
