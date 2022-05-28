const mongoose = require("mongoose");
const user = require("./user")
require('dotenv').config()

mongoose.connect(process.env.link, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("working")
}).catch((err) => console.log(err));


const new_user = new user({ username: "harshit", password: "5545454511" })
new_user.save().then(() => console.log(new_user))