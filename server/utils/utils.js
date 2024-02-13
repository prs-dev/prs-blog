const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
// const connectDb = () => {
// Promise.resolve(mongoose.connect(process.env.MONGO))
// new Promise((resolve) => resolve(mongoose.connect(process.env.MONGO)))
// console.log('connected')
// return new Promise((resolve, reject) => {
//     resolve(
//         mongoose.connect(process.env.MONGO)
//         )
//         console.log('connected')
//         reject(`Can't connect!`)
//     })

// }
const connectDb = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => console.log('connected to DB'))
        .catch(err => console.log(`Can't connect: ${err.message}`))
}

const errorGen = (code, msg) => {
    const error = new Error()
    error.status = code
    error.message = msg
    return error
}

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    } catch (error) {
        console.error(error)
    }

}

const comparePasswords = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash)
    } catch (error) {
        console.error(error)
    }
}

const genToken = (id) => jwt.sign({ id }, process.env.SECRET)

module.exports = {
    connectDb,
    errorGen,
    hashPassword,
    genToken,
    comparePasswords
}