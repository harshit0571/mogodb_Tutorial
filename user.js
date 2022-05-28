const mongoose = require('mongoose')

const User1 = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3
    },
    password: {
        type: String,
        required: true,
        min: 8,
    }
})

module.exports = mongoose.model("users", User1)