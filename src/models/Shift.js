import { Sequelize } from "sequelize";
import db from "./db.js";
import User from "./User.js";

const Shift = db.define('turnos', {
  usuarioId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    
      operador: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      periodo: {
        type: Sequelize.STRING,
      },
      maquina: {
        type: Sequelize.STRING,
      },
      ge: {
        type: Sequelize.STRING,
      },
      metaPorHora: {
        type: Sequelize.STRING,
      },
      planejado: {
        type: Sequelize.STRING,
      },
      produzido: {
        type: Sequelize.STRING,
      },
      desperdicoCafe: {
        type: Sequelize.STRING,
      },
      desperdicoEmbalagem: {
        type: Sequelize.STRING,
      },
      qualidade: {
        type: Sequelize.STRING,
      },
      she: {
        type: Sequelize.STRING,
      },
});


Shift.belongsTo(User, { foreignKey: 'usuarioId' });
User.hasMany(Shift, { foreignKey: 'usuarioId' });


// // create a table in database
// Shift.sync()
export default Shift;