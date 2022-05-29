const mongoose = require("mongoose");
const user = require("./user")
require('dotenv').config()

mongoose.connect(process.env.link, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("working")
}).catch((err) => console.log(err));


// const new_user = new user({ username: "harsh", password: "5545454511" })
// new_user.save().then(() => console.log(new_user))

// async function run() {
//     try {
//         const find = await user.findById("629240f3a29260a4b5766d4d");
//         console.log(find);
//     }
//     catch (e) {
//         console.log(e)
//     }

// }
// run();

async function run() {
    try {
        const find = await user.find({ username: "harshit" });
        console.log(find);
    }
    catch (e) {
        console.log(e)
    }

}
run();