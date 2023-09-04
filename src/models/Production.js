import { Sequelize } from "sequelize";
import db from "./db.js";

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
});

Production.belongsTo(Time);

export default Production