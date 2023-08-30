import { Sequelize } from "sequelize";
import db from "./db.js";

const User = db.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    telephone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

// create a table in database
// User.sync()

export default User;