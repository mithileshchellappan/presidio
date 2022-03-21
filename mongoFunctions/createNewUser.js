const mongo = require("../utils/mongo");
const userSchema = require('../schemas/userSchema')

module.exports = async (req,res)=>{
    return await mongo().then(async mongoose =>{
        try{
            console.log('create new')
            const result = await userSchema.create(
                {
                    username:req.body.username,
                    coins:req.body.coins?req.body.coins:0
                }
            )
            console.log(result)
            res.send('user created successfully')
            res.status(200)
        }finally{
            console.log('added user')
            mongoose.connection.close();
        }
    }
    )
}

