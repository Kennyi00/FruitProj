const express = require('express')
const router = express.Router()
const fruitCtrl = require('../controllers/fruitsController')

    router.post('/', fruitCtrl.create)

    router.get('/', fruitCtrl.index)

    router.get('/:id', fruitCtrl.show)

    // router.post


    module.exports = router