const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const { db } = require("../database/dbconnection");
router.delete("/api/delete-billing/:id", async (req, res) => {
  // codes will be here
  const id = req.params.id;
  const filter = { _id: ObjectId(id) };
  console.log(id);
  const result = await db.bills.deleteOne(filter);
  if (result.deletedCount > 0) {
    return res.send({ status: true, message: "Operation successful" });
  }
  return res.send({ status: false, message: "Operation failed" });
});

module.exports = router;
