import { Sequelize } from "sequelize";
import db from "./db.js";
import ProductionData from "./ProductionData.js";

const Period = db.define('periodos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
      turno: {
        type: Sequelize.STRING,
      },    
},{
  timestamps: false, // Esta opção remove os campos de timestamps
});


// // create a table in database
// Shift.sync()
export default Period;