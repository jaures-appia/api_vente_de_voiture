const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('ventevoiture', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

const Client = sequelize.define('Client', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
  })

module.exports = Client