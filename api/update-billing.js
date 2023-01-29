const express = require("express");
const router = express.Router();
const { bills } = require("../database/dbconnection");
router.put("api", async (req, res) => {
  // codes will be here
  const id = req.id;
  const modifiedData = req.body;
  const result = await bills.updateOne(
    { id: ObjectId(id) },
    { $set: modifiedData },
    { upsert: true }
  );
  if (result.modifiedCount > 0 || result.upsertCount > 0) {
    return res.send({ status: true, message: "Operation successful" });
  }
  return res.send({ status: false, message: "Operation failed" });
});

module.exports = router;
