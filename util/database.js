const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Faizan', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
