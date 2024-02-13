const express = require('express')
require('dotenv').config()

const {connectDb} = require('./utils/db')
const { errorHandler, logger } = require('./middlewares/middlewares')
const { errorGen } = require('./utils/error')
const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const commentRouter = require('./routes/comment.routes')

const app = express()

const PORT = process.env.PORT || 5000

connectDb()
app.use(express.json())
app.use(logger)

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)
app.use('/api/comment', commentRouter)

//test get route
app.get('/', (req, res, next) => {
    next(errorGen(404, 'not found'))
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`)
})