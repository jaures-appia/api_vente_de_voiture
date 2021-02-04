const express = require('express')
const router = express.Router()

const achatCtrl = require('../controllers/achat')

router.post('/', achatCtrl.createAchat)

router.get('/', achatCtrl.getAllAchat)

router.get('/:id', achatCtrl.getOneAchat)

router.put('/:id', achatCtrl.updateAchat)

router.delete('/:id', achatCtrl.deleteAchat)


module.exports = router