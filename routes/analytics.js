const express = require('express')
const controller = require('../controllers/analytics')
const passport = require('passport')
const router = express.Router()

router.get('/overview', passport.authenticate('jwt', {session: false}), controller.overview)
router.get('/analytic', passport.authenticate('jwt', {session: false}), controller.analytic)

module.exports = router