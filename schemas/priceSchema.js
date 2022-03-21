const mongoose = require("mongoose");

const priceSchema = mongoose.Schema({
  
  currPrice:{
      type:String,
      required:true
  },
  admin:{
      type:String,
      required:true
  }
  
},{
    timestamps:true
});

module.exports = mongoose.model('priceSchema',priceSchema);
