const Voiture = require('../models/voiture')

exports.createVoiture = async (req, res) => {
    const voiture = await Voiture.create(req.body)
    res.status(201).json(voiture)
}

exports.getAllVoiture = async (req, res) => {
    const voitures = await Voiture.findAll()
    res.status(201).json(voitures)
}

exports.getOneVoiture = async (req, res) => {
    const voiture = await Voiture.findAll({
        where: {
        id: req.params.id
        }
    })
    res.status(201).json(voiture)
}

exports.updateVoiture = async (req, res) => {
    const voiture = await Voiture.update(req.body, {
        where: {
        id: req.params.id
        }
    })
    res.status(201).json("voiture modifié avec succes")
}

exports.deleteVoiture = async (req, res) => {
    const voiture = await Voiture.destroy({
        where : {
        id: req.params.id
        }
    })
    res.status(201).json("Delete !")
}