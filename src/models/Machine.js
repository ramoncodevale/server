import { Sequelize } from "sequelize";
import db from "./db.js";

const Machine = db.define('maquinas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
  },
  metaHora: {
    type: Sequelize.INTEGER,
  },
});

export default Machine