import { Sequelize } from "sequelize";
import db from "./db.js";
 

import Operator from "./Operator.js";

import Time from "./Time.js";

const Production =  db.define('producao', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantidade: {
    type: Sequelize.INTEGER,
  },
  perda: {
    type: Sequelize.INTEGER,
  },
  comentario: {
    type: Sequelize.STRING,
  },
  metaHora: {
    type: Sequelize.STRING,
  }
},  {
  timestamps: false, // Esta opção remove os campos de timestamps
});

Production.belongsTo(Time);
Production.belongsTo(Operator, { foreignKey: 'operadorId' });


export default Production