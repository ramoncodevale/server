import { Sequelize } from "sequelize";
import db from "./db.js";

import Period from "./Period.js";
import Machine from "./Machine.js";
import Operator from "./Operator.js";
import Production from "./Production.js";

const ProductionData = db.define('registroProducaos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  ger: {
    type: Sequelize.INTEGER,
  },
  planejado: {
    type: Sequelize.INTEGER,
  },
  produzido: {
    type: Sequelize.INTEGER,
  },
  qualidade: {
    type: Sequelize.BOOLEAN,
  },
  she: {
    type: Sequelize.BOOLEAN,
  },
  desperdicioEmbalagem: {
    type: Sequelize.INTEGER,
  },
  desperdicioCafe: {
    type: Sequelize.INTEGER,
  },
},  {
  timestamps: false, // Esta opção remove os campos de timestamps
});


ProductionData.belongsTo(Period, {
  foreignKey: 'periodoId',
  as: 'periodo',
});

ProductionData.belongsTo(Machine, {
  foreignKey: 'maquinaId', 
  as: 'maquina',
});


ProductionData.belongsTo(Operator, {
  foreignKey: 'operadorId', 
  as: 'operador',
});


ProductionData.hasMany(Production);

// ProductionData.sync()


export default ProductionData