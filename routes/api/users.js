const express = require('express')
const router = express.Router()
const { checkToken, checkAdmin, dataController, apiController } = require('../../controller/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', dataController.create, apiController.auth)
router.post('/login', dataController.login, apiController.auth)
router.get("/", checkAdmin, dataController.getUsers, apiController.users);
router.get('/check-token', ensureLoggedIn, checkToken)

module.exports = router
