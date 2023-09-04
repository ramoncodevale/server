import { Sequelize } from "sequelize";
import db from "./db.js";

const Time= db.define('Horario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  faixa: {
    type: Sequelize.STRING,
  },
},  {
  timestamps: false, // Esta opção remove os campos de timestamps
});

// Time.sync()


export default Time