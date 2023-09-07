import { Sequelize } from 'sequelize';
import db from './db.js'

const ProductionRegister = db.define('registro_producao', {
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
  periodo_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'period', // Nome da tabela referenciada
      key: 'id' // Coluna da tabela referenciada
    }
  },
  operador_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'operator', // Nome da tabela referenciada
      key: 'id' // Coluna da tabela referenciada
    }
  },
  maquina_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'machine', // Nome da tabela referenciada
      key: 'id' // Coluna da tabela referenciada
    }
  }
});

export default ProductionRegister