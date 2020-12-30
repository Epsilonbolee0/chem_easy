const express = require('express')
const controller = require('../controllers/task')
const passport = require('passport')
const router = express.Router()

router.get('/:themeId', passport.authenticate('jwt', {session: false}),  controller.getByThemeId)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update)
router.delete('/register', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router