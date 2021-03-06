const express = require("express");
const buyCoins = require("./mongoFunctions/buyCoins");
const createAdmin = require("./mongoFunctions/createAdmin");
const createNewUser = require('./mongoFunctions/createNewUser');
const getAllTransactions = require("./mongoFunctions/getAllTransactions");
const getTransactionsOfUser = require("./mongoFunctions/getTransactionsOfUser");
const getUserDetails = require("./mongoFunctions/getUserDetails");
const priceChange = require("./mongoFunctions/priceChange");
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
router.post('/createAdmin',bodyParser,createAdmin)
router.post('/getTransactionOfUser',bodyParser,getTransactionsOfUser)
router.post('/getAllTransactions',bodyParser,getAllTransactions)
router.post('/priceChange',bodyParser,priceChange)
module.exports = router