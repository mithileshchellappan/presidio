const express = require("express");
const buyCoins = require("./mongoFunctions/buyCoins");
const createNewUser = require('./mongoFunctions/createNewUser');
const getUserDetails = require("./mongoFunctions/getUserDetails");
const transactonBetweenUser = require("./mongoFunctions/transactonBetweenUser");
const router = express.Router()
const bodyParser = require('body-parser').json();
// Get all posts
router.post("/createUser",bodyParser, createNewUser)
router.get('/',async(req,res)=>{
    console.log('in /')
    res.send('hello world')
})
router.post('/buyCoins',bodyParser,buyCoins)
router.post('/getUser',bodyParser,getUserDetails)
router.post('/transfer',bodyParser,transactonBetweenUser)

module.exports = router