import { Sequelize } from "sequelize";
import db from "./db.js";

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
});


// // create a table in database
// Shift.sync()
export default Period;