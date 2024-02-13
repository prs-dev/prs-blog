const getAllComments = (req, res, next) => {
    console.log('getAllComments')
}

const getComment = (req, res, next) => {
    console.log('get comment')
    
}

const createComment = (req, res, next) => {
    console.log('create comment')
}

const updateComment = (req, res, next) => {
    console.log('udpate comment')   
}

const deleteComment = (req, res, next) => {
    console.log('del comment')

}

module.exports = {
    getAllComments,
    getComment,
    updateComment,
    deleteComment,
    createComment
}