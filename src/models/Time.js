import { Sequelize } from "sequelize";
import db from "./db.js";
import Period from "./Period.js";

const Time= db.define('horario', {
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

Time.belongsTo(Period, { foreignKey: 'periodoId' });
// Time.sync()


export default Time