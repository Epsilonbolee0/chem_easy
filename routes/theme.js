const express = require('express')
const controller = require('../controllers/theme')
const router = express.Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', controller.remove)
router.post('/register', controller.create)
router.patch('/register', controller.update)


module.exports = router