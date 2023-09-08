import { Sequelize } from 'sequelize';
import db from './db.js'
import Time from './Time.js'

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
  produzido: {
    type: Sequelize.INTEGER
  },
  qualidade: {
    type: Sequelize.BOOLEAN
  },
  she: {
    type: Sequelize.BOOLEAN
  },
  desperdicioEmbalagem: {
    type: Sequelize.INTEGER
  },
  desperdicioCafe: {
    type: Sequelize.INTEGER
  },
 
});

ProductionRegister.belongsTo(Time)

export default ProductionRegister