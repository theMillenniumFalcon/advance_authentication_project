const register = (req, res, next) => {
    res.send("Register route")
}

const login = (req, res, next) => {
    res.send("Login route")
}

const forgotpassword = (req, res, next) => {
    res.send("Forgot password route")
}

const resetpassword = (req, res, next) => {
    res.send("Reset password route")
}

module.exports = {
    register, login, forgotpassword, resetpassword
}
