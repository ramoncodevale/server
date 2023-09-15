import { Sequelize } from "sequelize";
import db from "./db.js";
import Time from "./Time.js";
import Operator from "./Operator.js";

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
     perda: {
      type: Sequelize.STRING,
     }, 
     horarioId: {
      type: Sequelize.INTEGER,
     }
},{
  timestamps: false, // Esta opção remove os campos de timestamps
});

Production.belongsTo(Time, { foreignKey: 'horarioId' });
Production.belongsTo(Operator, { foreignKey: 'operadorId' });


// // create a table in database
// Shift.sync()
export default Production;