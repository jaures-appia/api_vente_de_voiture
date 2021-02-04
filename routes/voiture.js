const express = require('express')
const router = express.Router()

const voitureCtrl = require('../controllers/voiture')
const Voiture = require('../models/voiture')

router.post('/', voitureCtrl.createVoiture)

router.get('/', voitureCtrl.getAllVoiture)

router.get('/:id', voitureCtrl.getOneVoiture)

router.put('/:id', voitureCtrl.updateVoiture)

router.delete('/:id', voitureCtrl.deleteVoiture)


module.exports = router