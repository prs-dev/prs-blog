const router = require('express').Router()
const {createComment, getAllComments, getComment, updateComment, deleteComment} = require('../controllers/comment.controller')
const {verifyToken} = require('../middlewares/middlewares')

router.get('/all', getAllComments)
router.post('/create', createComment)
router.get('/:id', getComment)
router.put('/update/:id',  updateComment)
router.delete('/delete/:id', deleteComment)


module.exports = router