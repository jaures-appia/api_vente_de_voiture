const Client = require('../models/client')

exports.createClient = async (req, res) => {
    const client = await Client.create(req.body)
    res.status(201).json(client)
}

exports.getAllClient = async (req, res) => {
    const clients = await Client.findAll()
    res.status(201).json(clients)
}

exports.getOneClient = async (req, res) => {
    const client = await Client.findAll({
        where: {
        id: req.params.id
        }
    })
    res.status(201).json(client)
}

exports.updateClient = async (req, res) => {
    const client = await Client.update(req.body, {
        where: {
        id: req.params.id
        }
    })
    res.status(201).json("client modifié avec succes")
}

exports.deleteClient =  async (req, res) => {
    const client = await Client.destroy({
      where : {
        id: req.params.id
      }
    })
    res.status(201).json("Delete !")
}