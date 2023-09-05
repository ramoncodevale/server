import { Sequelize } from "sequelize";
import db from "./db.js";
import ProductionData from "./ProductionData.js";

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
    
  
});

Operator.hasMany(ProductionData, {
  foreignKey: 'operadorId', // O nome do campo na tabela ProductionData que faz referência ao operador
  as: 'productions', // Opcional: um alias para a associação
});
// // create a table in database
// Shift.sync()
export default Operator;