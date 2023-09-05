import { Sequelize } from "sequelize";
import db from "./db.js";
import ProductionData from "./ProductionData.js";


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
}, {
  timestamps: false, // Esta opção remove os campos de timestamps
});



export default Machine;
