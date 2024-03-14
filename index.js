const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");


require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(cookieParser())
app.use(express.json());

const mongodb = require("./config/database");
mongodb.connect();

const user = require("./routes/user")
app.use("/api/v1", user);

app.listen(PORT, ()=>{
    console.log("Server is active on PORT NO: ", PORT);
})