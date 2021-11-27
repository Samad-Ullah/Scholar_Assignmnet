const express = require("express");
const router = express.Router();
// const User = require('../Model/user')
const {login} = require('../Controlller/login') 

router.post("/login", login)


module.exports = router


