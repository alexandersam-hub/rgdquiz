const {Router} = require('express')
const promoController = require('../controllers/promoController')
const router = new Router()

router.post('/pull', promoController.addPromo)

module.exports = router