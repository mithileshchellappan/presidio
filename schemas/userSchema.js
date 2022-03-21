const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  
  username: {
    type: String,
    required: true,
  },
  coins: { type: Number, default: 0 },
  
},{
    timestamps:true
});

module.exports = mongoose.model('userSchema',userSchema);
