const mongoose = require('mongoose')


var url = "mongodb+srv://notagodzilla:8608684820@cluster0.0s183.mongodb.net/test";

module.exports=async()=>{
    await mongoose.connect(url,{
        useNewUrlParser:true
    })
    return mongoose 
}