const mongo = require("../utils/mongo");
const userSchema = require("../schemas/userSchema");

module.exports = async (req, res) => {
  return await mongo().then(async (mongoose) => {
    try {
      console.log("create new");
      const result = await userSchema.findOne({
        username: req.body.username
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
