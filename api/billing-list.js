const express = require("express");
const router = express.Router();
const { bills } = require("../database/dbconnection");
router.get("api/billing-list", async (req, res) => {
  // codes will be here
  const result = await bills.find().toArray();
  return res.send(result);
});

module.exports = router;
