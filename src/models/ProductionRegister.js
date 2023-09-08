import { Sequelize } from 'sequelize';
import db from './db.js'
import Operator from './Operator.js';
import Machine from './Machine.js';
import Period from './Period.js';

const ProductionRegister = db.define('registros', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data: {
    type: Sequelize.DATE
  },
  ger: {
    type: Sequelize.INTEGER
  },
  planejado: {
    type: Sequelize.INTEGER
  },
 
});

ProductionRegister.belongsTo(Period, { foreignKey: 'periodoId' });
ProductionRegister.belongsTo(Operator, { foreignKey: 'operadorId' });
ProductionRegister.belongsTo(Machine, { foreignKey: 'maquinaId' });


export default ProductionRegister