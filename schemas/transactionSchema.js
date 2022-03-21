const mongoose = require("mongoose");
const userSchema = require('./userSchema')
const transactionSchema = mongoose.Schema({
  
  receiver: {
    type: String,
    required: true,
  },
  sender:{
    type: String,
    required: true,
  },

  coins: { type: Number },
},{
    timestamps:true
});

module.exports = mongoose.model('transactionSchema',transactionSchema);
