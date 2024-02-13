const getAllUsers = (req, res, next) => {
    console.log('getAllUsers')
}

const getUser = (req, res, next) => {
    console.log('get user')
    
}

const updateUser = (req, res, next) => {
    console.log('udpate users')
    
}

const deleteUser = (req, res, next) => {
    console.log('del user')

}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}