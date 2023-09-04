import { Sequelize } from "sequelize";
import db from "./db.js";

import Period from "./Period.js";
import Machine from "./Machine.js";
import Operator from "./Operator.js";
import Production from "./Production.js";

const ProductionData = db.define('registroProducao', {
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

// Defina as relações entre os modelos
ProductionData.belongsTo(Period);
ProductionData.belongsTo(Operator);
ProductionData.belongsTo(Machine);
ProductionData.hasMany(Production);

// ProductionData.sync()


export default ProductionData