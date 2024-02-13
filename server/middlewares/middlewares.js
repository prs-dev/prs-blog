const jwt = require('jsonwebtoken')
const {errorGen} = require('../utils/utils')
const User = require('../models/User')
require('dotenv').config()

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

const verifyToken = async(req, res, next) => {
    try {
        const token = req.headers.authorization
        // console.log(token)
        if(!token) return next(errorGen(403, 'Invalid Token'))
        const verify = jwt.verify(token, process.env.SECRET)
        if(!verify) return next(errorGen(401, 'Unauthorized!'))
        // console.log(user)
        const user = await User.findOne({_id:  verify.id})
        if(!user) return next(errorGen(404, 'Not found!'))
        delete user._doc.password
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}

const isAdmin = (req, res, next) => {
    const {user} = req
    return user.isAdmin ? next() : next(errorGen(401, 'Unauthirized!'))
}

module.exports = {
    errorHandler,
    logger,
    verifyToken,
    isAdmin
}