const mongo = require("../utils/mongo");
const transactionSchema = require("../schemas/transactionSchema");
const { request } = require("express");

module.exports = async (req, res) => {
  return await mongo().then(async (mongoose) => {
    try {
      const result = await transactionSchema.find({
        $or: [
          { sender: req.body.username },
          { receiver: req.body.username }
        ]
      });
      console.log(result);
      res.send({ status: 200, data: result });
      res.status(200);
    } catch (e) {
      res.status(400);
    } finally {
      mongoose.connection.close();
    }
  });
};
