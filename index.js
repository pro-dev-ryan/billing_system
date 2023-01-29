const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { dbConnected } = require("./database/dbconnection");
const PORT = process.env.PORT || 5000;
app.use(express.json());
// router paths
const showBill = require("./api/billing-list");
const addBill = require("./api/add-billing");
const updateBill = require("./api/update-billing");
const deleteBill = require("./api/delete-billing");
const login = require("./api/login");
const signUp = require("./api/registration");
// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Billing id is in the process");
});

// routes
app.get("api/billing-list", showBill);
app.post("api/add-billing", addBill);
app.put("api/update-billing/:id", updateBill);
app.delete("api/delete-billing/:id", deleteBill);
app.get("api/login", login);
app.put("api/registration", signUp);

app.listen(PORT, () => {
  dbConnected();
  `App is running on port no ${PORT}`;
});
