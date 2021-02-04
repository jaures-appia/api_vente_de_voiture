const express = require('express')
const bodyParser = require('body-parser')
const { Sequelize, DataTypes } = require('sequelize')
const os = require('os')
// const expressOasGenerator = require('express-oas-generator')

const app = express()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
 
// expressOasGenerator.init(app, {}) api/v1/api-docs
app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(bodyParser.json())
app.get('/', (req, res, next) =>{
  res.send("use /api/v1/api-docs for the official documentation")
  next()
})


const sequelize = new Sequelize('ventevoiture', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })

// app.use('/', (req, res, next) => {
//   console.log(req.ip, req.hostname, req.url)
//   next()
// })


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.sync({ alter: true })

    const clientRoutes = require('./routes/client')
    const voitureRoutes = require('./routes/voiture')
    const achatRoutes = require('./routes/achat')

    app.use('/api/v1/client', clientRoutes)
    app.use('/api/v1/voiture', voitureRoutes)
    app.use('/api/v1/achat', achatRoutes)

    app.listen(3000, console.log("starting on port 3000"))

    } catch (error) {
    console.error('Unable to connect to the database:', error);
}