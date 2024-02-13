const router = require('express').Router()
const {getAllUsers, getUser, updateUser, deleteUser} = require('../controllers/user.controller')
const {verifyToken} = require('../middlewares/middlewares')

router.get('/all', getAllUsers)
router.get('/:id', getUser)
router.put('/update/:id',  updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router