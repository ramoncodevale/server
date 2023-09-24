import { Sequelize } from "sequelize";
import db from "./db.js";


const Operator = db.define('operadores', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sobrenome: {
      type: Sequelize.STRING,
      allowNull: true,
    },
}, {
  timestamps: false, // Esta opção remove os campos de timestamps
});



// // create a table in database
// Shift.sync()
export default Operator;