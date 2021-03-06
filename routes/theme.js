const express = require('express')
const controller = require('../controllers/theme')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', passport.authenticate('jwt', {session: false}),  controller.getById)
router.delete('/:id', passport.authenticate('jwt', {session: false}),  controller.remove)
router.post('/register', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/register', passport.authenticate('jwt', {session: false}),  controller.update)


module.exports = router