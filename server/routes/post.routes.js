const router = require('express').Router()
const {createPost, getAllPosts, getPost, updatePost, deletePost} = require('../controllers/post.controller')
const {verifyToken} = require('../middlewares/middlewares')

router.get('/all', getAllPosts)
router.post('/create', createPost)
router.get('/:id', getPost)
router.put('/update/:id',  updatePost)
router.delete('/delete/:id', deletePost)

module.exports = router