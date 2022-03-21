const mongo = require("../utils/mongo");
const userSchema = require('../schemas/userSchema')

module.exports = async (req,res)=>{
    return await mongo().then(async mongoose =>{
        try{
            console.log('create new')
        const result = await userSchema.findOne({
                username:req.body.username
            })
            console.log(result)
             res.send(result)
        }finally{
            console.log('added user')
            mongoose.connection.close();
        }
    }
    )
}

