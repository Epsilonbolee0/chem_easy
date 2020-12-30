const express = require('express')
const controller = require('../controllers/homework')
const passport = require('passport')
const router = express.Router()

router.post('/login', passport.authenticate('jwt', {session: false}), controller.getAll)
router.post('/register', passport.authenticate('jwt', {session: false}), controller.create)

module.exports = router