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
},{
  timestamps: false, // Esta opção remove os campos de timestamps
});

Period.hasMany(ProductionData, {
  foreignKey: 'periodoId', // O nome do campo na tabela ProductionData que faz referência ao operador
  as: 'productions', // Opcional: um alias para a associação
});
// // create a table in database
// Shift.sync()
export default Period;