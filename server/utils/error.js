const errorGen = (code, msg) => {
    const error = new Error()
    error.status = code
    error.message = msg
    return error
}

module.exports = {
    errorGen
}