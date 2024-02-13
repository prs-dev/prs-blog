const mongoose = require('mongoose')
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

module.exports = {
    connectDb
}