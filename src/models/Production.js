import { Sequelize } from "sequelize";
import db from "./db.js";
import Machine from "./Machine.js";
import Operator from "./Operator.js";
import Period from "./Period.js";

const Production = db.define('producoes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
     quantidade: {
      type: Sequelize.INTEGER,
     },
     comentario: {
      type: Sequelize.STRING,
     },
},{
  timestamps: false, // Esta opção remove os campos de timestamps
});


Production.belongsTo(Period)
Production.belongsTo(Operator)
Production.belongsTo(Machine)
// // create a table in database
// Shift.sync()
export default Production;