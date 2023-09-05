import { Sequelize } from "sequelize";
import db from "./db.js";

import Period from "./Period.js";
import Machine from "./Machine.js";
import Operator from "./Operator.js";

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
  data: {
    type: Sequelize.STRING,
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
  quantidade: {
    type: Sequelize.STRING,
  },
  perda: {
    type: Sequelize.INTEGER,
  },
  comentario: {
    type: Sequelize.STRING,
  }
},  {
  timestamps: false, // Esta opção remove os campos de timestamps
});


ProductionData.belongsTo(Operator, { foreignKey: 'operadorId' });
ProductionData.belongsTo(Machine, { foreignKey: 'maquinaId' });
ProductionData.belongsTo(Period, { foreignKey: 'periodoId' });

// ProductionData.sync()


export default ProductionData