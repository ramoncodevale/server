import { Sequelize  } from "sequelize";
import db from './db.js'

const ProductionAllRegister = db.define('producao_registro_producao', {
  producao_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: 'producao', // Nome da tabela referenciada
      key: 'id' // Coluna da tabela referenciada
    }
  },
  registro_producao_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: 'registro_producao', // Nome da tabela referenciada
      key: 'id' // Coluna da tabela referenciada
    }
  }
});

export default ProductionAllRegister;
