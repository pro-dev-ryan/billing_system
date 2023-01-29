const express = require("express");
const router = express.Router();
const { db } = require("../database/dbconnection");
router.post("/api/add-billing", async (req, res) => {
  // codes will be here
  const datas = req.body;
  const result = await db.bills.insertOne(datas);
  if (result.acknowledged) {
    return res.send({
      status: true,
      message: "User account created successfully",
    });
  }
  return res.send({ status: false, message: "Account creation unsuccesful" });
});

module.exports = router;
