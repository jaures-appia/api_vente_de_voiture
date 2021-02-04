const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('ventevoiture', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })
  

const Voiture = sequelize.define('Voiture', {
        // Model attributes are defined here
        marque: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modele: {
            type: DataTypes.STRING,
            allowNull: false
        },
        annee: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
    // Other model options go here
    })

module.exports = Voiture