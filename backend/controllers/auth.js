const User = require('../models/User')

const register = async (req, res, next) => {
    const {username, email, password} = req.body
    try {
        const user = await User.create({
            username, email, password
        })
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body
    if(!email || !password) {
        res.status(400).json({ success: false, error: "Please provide email and password." })
    }
    try {
        const user = await User.findOne({ email }).select("+password")
        if(!user) {
            res.status(404).json({ success: false, error: "Invalid credentials." })
        }

        const isMatch = await user.matchPasswords(password)

        if(!isMatch) {
            res.status(404).json({ success: false, error: "Invalid credentials." })
        }

        res.status(200).json({ success: true, token: "asdfghjkl" })
    } catch(error) {
        res.status(500).json({ success: false, error: error.message })
    }
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
