const Achat = require('../models/achat')

exports.createAchat = async (req, res) => {
    const achat = await Achat.create(req.body)
    res.status(201).json(achat)
  }

exports.getAllAchat = async (req, res) => {
    const achats = await Achat.findAll()
    res.status(201).json(achats)
}

exports.getOneAchat = async (req, res) => {
    const achat = await Achat.findAll({
        where: {
        id: req.params.id
        }
    })
    res.status(201).json(achat)
}

exports.updateAchat = async (req, res) => {
    const achat = await Achat.update(req.body, {
        where: {
        id: req.params.id
        }
    })
    res.status(201).json("achat modifié avec succes")
}

exports.deleteAchat = async (req, res) => {
    const achat = await Achat.destroy({
        where : {
        id: req.params.id
        }
    })
    res.status(201).json("Delete !")
}