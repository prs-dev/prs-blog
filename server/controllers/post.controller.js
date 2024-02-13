const getAllPosts = (req, res, next) => {
    console.log('getAllposts')
}

const createPost = (req, res, next) => {
    console.log('create post')
}

const getPost = (req, res, next) => {
    console.log('get post')
    
}

const updatePost = (req, res, next) => {
    console.log('udpate post')
    
}

const deletePost = (req, res, next) => {
    console.log('del post')

}

module.exports = {
    getAllPosts,
    getPost,
    updatePost,
    deletePost,
    createPost
}