const express = require('express')
const router = express.Router()

const clientCtrl = require('../controllers/client')


router.post('/', clientCtrl.createClient)

router.get('/', clientCtrl.getAllClient)

router.get('/:id', clientCtrl.getOneClient)

router.put('/:id', clientCtrl.updateClient)

router.delete('/:id', clientCtrl.deleteClient)

module.exports = router