const express = require("express");
const router = express.Router();
const { BillDB } = require("../database/dbconnection");

router.put("api/registration", async (req, res) => {
  // codes will be here
  const datas = req.body;
  const result = await BillDB.collection("users").insertOne(datas);
  if (result.acknowledge) {
    return res.send({
      status: true,
      message: "User account created successfully",
    });
  }
  return res.send({ status: false, message: "Account creation unsuccesful" });
});

module.exports = router;
