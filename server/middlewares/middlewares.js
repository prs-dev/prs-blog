const errorHandler = (err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Server Error'
    res.status(status).json({
        status: 'failure',
        statusCode: status,
        message
    })
}

const logger = (req, res, next) => {
    console.log('----------------')
    console.log("Path:", req.path)
    console.log("Method:", req.method)
    console.log('Body:', req.body)
    console.log('----------------')
    next()
}

const verifyToken = (req, res, next) => {
    console.log('verifytoken')
    next()
}

const isAdmin = (req, res, next) => {
    console.log('isAdmin')
    next()
}

module.exports = {
    errorHandler,
    logger,
    verifyToken,
    isAdmin
}