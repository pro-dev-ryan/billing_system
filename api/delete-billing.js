const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const { bills } = require("../database/dbconnection");
router.delete("api", async (req, res) => {
  // codes will be here
  const id = req.id;
  const result = await bills.deleteOne({ id: ObjectId(id) });
  if (result.deletedCount < 0) {
    return res.send({ status: true, message: "Operation successful" });
  }
  return res.send({ status: false, message: "Operation failed" });
});

module.exports = router;
