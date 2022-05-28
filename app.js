const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.link, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("working")
}).catch((err) => console.log(err));