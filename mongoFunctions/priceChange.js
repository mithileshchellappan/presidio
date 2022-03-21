const mongo = require("../utils/mongo");
const userSchema = require('../schemas/userSchema');
const priceSchema = require("../schemas/priceSchema");

module.exports = async (req,res)=>{
    return await mongo().then(async mongoose =>{
        try{
            var result = await userSchema.findOne({
                username:req.body.username
            })
            console.log(result)
            if(result.type==="Admin"){
                var oldPrice = await priceSchema.find({
                    
                })
                var obj = {
                    currPrice:req.body.price,
                    admin:req.body.username
                }
                await priceSchema.findOneAndUpdate(oldPrice,obj,{ upsert: true})
                res.status(200)
                res.send({code:200,data:`Price now set to ${req.body.price}`})
            }else{
                res.status(403)
                res.send({code:403,data:'User unauthorized'})
            }
        }finally{
            mongoose.connection.close();
        }
    }
    )
}

