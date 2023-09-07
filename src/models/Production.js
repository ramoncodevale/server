import { Sequelize } from "sequelize";
import db from "./db.js";

const Production = db.define('producao', {
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
     horarioId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'horario',
        key: 'id'
      }
     }
},{
  timestamps: false, // Esta opção remove os campos de timestamps
});


// // create a table in database
// Shift.sync()
export default Production;