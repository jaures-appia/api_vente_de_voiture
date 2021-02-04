const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('ventevoiture', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

const Achat = sequelize.define('Achat', {
    // Model attributes are defined here
    prix_ht: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    prix_ttc: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    id_client: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_voiture: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    // Other model options go here
  })

module.exports = Achat