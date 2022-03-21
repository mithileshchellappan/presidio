const mongo = require("../utils/mongo");
const userSchema = require('../schemas/userSchema')

module.exports = async (req,res)=>{
    return await mongo().then(async mongoose =>{
        try{
            console.log('create new')
        const result = await userSchema.findOneAndUpdate({
                username:req.body.username
            },{
                $inc:{
                    coins:req.body.coins
                }
            })
        console.log(result)
        res.send(result)
        }finally{
            console.log('added coins')
            mongoose.connection.close();
        }
    }
    )
}

