const Sequelize = require('sequelize');
const db = require('./db');

const Ideas = db.define('ideias', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ideia: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    setor: {
        type: Sequelize.STRING,
    }
}) 
Ideas.sync();

module.exports = Ideas;