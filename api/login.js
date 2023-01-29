const express = require("express");
const router = express.Router();
const { db } = require("../database/dbconnection");

router.get("/api/login", async (req, res) => {
  // codes will be here
  const datas = req.body;
  const result = await db.BillDB.collection("users").findOne(datas);
  if (result.acknowledge) {
    return res.send({
      status: true,
      message: "User account logged successfully",
    });
  }
  return res.send({ status: false, message: "Account not found" });
});

module.exports = router;
