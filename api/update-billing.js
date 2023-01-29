const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const { db } = require("../database/dbconnection");
router.put("/api/update-billing/:id", async (req, res) => {
  // codes will be here
  const id = req.params.id;
  const modifiedData = req.body;
  const result = await db.bills.updateOne(
    { _id: ObjectId(id) },
    { $set: modifiedData },
    { upsert: true }
  );
  if (
    result.acknowledged ||
    result.modifiedCount > 0 ||
    result.upsertedCount > 0
  ) {
    return res.send({ status: true, message: "Operation successful" });
  }
  return res.send({ status: false, message: "Operation failed" });
});

module.exports = router;
