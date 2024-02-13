//signup and //signin
const router = require('express').Router()
const {registerUser, loginUser} = require('../controllers/auth.controller')
const {verifyToken} = require('../middlewares/middlewares')

router.post('/register',verifyToken, registerUser)
router.post('/login',verifyToken, loginUser)

module.exports = router