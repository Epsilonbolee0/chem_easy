const express = require('express')
const controller = require('../controllers/homework')
const router = express.Router()

router.post('/login', controller.getAll)
router.post('/register', controller.create)

module.exports = router