const mongo = require("../utils/mongo");
const userSchema = require('../schemas/userSchema')
const transactionSchema = require('../schemas/transactionSchema')



module.exports = async (req,res)=>{
    return await mongo().then(async mongoose =>{
        try{
            console.log('new transaction')
        const result = await userSchema.findOne({
                username:req.body.sender
            })
            console.log(result)
        if(result.coins<req.body.coins){
            res.send('insufficient balance')
        }else{
            const result1 = await userSchema.findOneAndUpdate({
                username:req.body.sender
            },{
                
                    $inc:{
                        coins:-req.body.coins
                    }
                
            })

            const result2 = await userSchema.findOneAndUpdate({
                username:req.body.receiver
            },{
                $inc:{
                    coins:req.body.coins
                }
            })

            const transactionHistory = await transactionSchema.create({
                receiver:req.body.receiver,
                sender:req.body.sender,
                coins:req.body.coins
            })

            res.send(result1,result2,transactionHistory)
        }
        }finally{
            mongoose.connection.close();
        }
    }
    )
}

