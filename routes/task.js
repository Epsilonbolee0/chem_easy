const express = require('express')
const controller = require('../controllers/task')
const router = express.Router()

router.get('/:themeId', controller.getByThemeId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/register', controller.remove)

module.exports = router