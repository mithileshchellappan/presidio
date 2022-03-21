const mongo = require("../utils/mongo");
const userSchema = require('../schemas/userSchema')

module.exports = async (req,res)=>{
    return await mongo().then(async mongoose =>{
        try{
            
            if(req.body.accessCode=='12345678'){
                const result = await userSchema.create(
                    {
                        username:req.body.username,
                        type:'Admin'
                    }
                )
                res.status(200)
                return res.send({code:200,data:result})
            }
            else if(!req.body.accessCode){
                res.status(403)
                return res.send({code:403,data:'Forbidden (access code missing)'})
            }
            else{
                res.status(401)
                return res.send({code:401,data:'Unauthorized'})
            }

            
        }finally{
            mongoose.connection.close();
        }
    }
    )
}

