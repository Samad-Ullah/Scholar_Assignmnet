const express = require("express");
const app = express();
const dotenv = require("dotenv")
const cors = require("cors");
const Connection = require("./Configuration/connection").DbConnection;
const PORT = 5000;
dotenv.config();

//database connection
Connection()

app.use(express.json());
app.use(cors());

//routes

const user = require("./Routes/login")

//app.use
app.use("/",user)


app.get('/' , (req, res)=>{
    res.send("hello world")
})

app.listen(PORT ,() =>{
    console.log(`server connect on PORT ======>  ${PORT}`)
})


module.exports = app;