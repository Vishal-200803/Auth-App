const mongoose = require('mongoose');

require("dotenv").config()

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("DB connected sucesfully")})
    .catch( (err) =>{
        console.log("DB connection isues:");
        console.error(err);
        process.exit(1);
    })
}