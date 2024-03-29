const router = require('express').Router()
const {getAllUsers, getUser, updateUser, deleteUser, getProfile} = require('../controllers/user.controller')
const {verifyToken, isAdmin} = require('../middlewares/middlewares')

router.get('/all', verifyToken, isAdmin, getAllUsers)
router.get('/:id', verifyToken, isAdmin, getUser)
router.get('/', verifyToken, getProfile)
router.put('/update/:id',verifyToken, isAdmin,  updateUser)
router.delete('/delete/:id',verifyToken, isAdmin, deleteUser)

module.exports = router