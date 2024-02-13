const {errorGen} = require('../utils/error')
const User = require('../models/User')
const {hashPassword} = require('../utils/encrypt')

const registerUser = async(req, res, next) => {
    try {
        const {username, email, password} = req.body
        if(!username || !email || !password) return next(errorGen(400, "Please provide all the fields!"))
        const user = await User.findOne({email})
        // console.log(user)
        if(user) return next(errorGen(400, 'User already exists!'))
        const newUser = new User({
            username, email, password: await hashPassword(password)
        })
        await newUser.save()
        return res.status(200).json({
            message: "User registered",
            user: newUser
        })
    } catch (error) {
        next(error)
    }
    // console.log('register')
}

const loginUser = (req, res, next) => {
    console.log('login')
}

module.exports = {
    registerUser,
    loginUser
}