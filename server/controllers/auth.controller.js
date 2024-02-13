// const {errorGen} = require('../utils/error')
const User = require('../models/User')
const {errorGen, hashPassword, genToken,comparePasswords} = require('../utils/utils')
// const {hashPassword} = require('../utils/encrypt')

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
            message: "User registered successfully"
        })
    } catch (error) {
        next(error)
    }
    // console.log('register')
}

const loginUser = async(req, res, next) => {
    try {
        const {email, password} = req.body
        if(!email || !password) return next(errorGen(400, "Please provide all the fields!"))
        const user = await User.findOne({email})
        if(!user) return next(errorGen(404, 'User does not exist!'))
       if(!await comparePasswords(password, user.password)) return next(errorGen(401, "Invalid password!"))
        const token = genToken(user._id)
        // const {password: test, ...rest} = user._doc
        delete user._doc.password
        return res.status(200).json({
            message: "Login successful",
            token,
            // user: rest
            user
        })
    } catch (error) {
        next(error)
    }
    // console.log('login')
}

module.exports = {
    registerUser,
    loginUser
}