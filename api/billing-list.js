const express = require("express");
const { db } = require("../database/dbconnection");
const router = express.Router();

router.get("/api/billing-list", async (req, res) => {
  // codes will be here
  const result = await db.bills.find().toArray();
  return res.send(result);
});

module.exports = router;
