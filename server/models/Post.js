const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

module.exports = mongoose.model("Post", postSchema)