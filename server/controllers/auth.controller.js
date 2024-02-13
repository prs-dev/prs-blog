const {errorGen} = require('../utils/error')
const User = require('../models/User')

const registerUser = async(req, res, next) => {
    try {
        const {username, email, password} = req.body
        if(!username || !email || !password) {
            return next(errorGen(400, "Please provide all the fields!"))
        }
        const newUser = await User.find({email})
        if(newUser) return next(errorGen(400, 'User already exists!'))
        
    } catch (error) {
        next(error)
    }
    console.log('register')
}

const loginUser = (req, res, next) => {
    console.log('login')
}

module.exports = {
    registerUser,
    loginUser
}