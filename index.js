const express = require("express");
const app = express();
dotenv().config;
const cors = require("cors");
const PORT = process.env.PORT || 5000;
app.use(express.json());

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Billing id is in the process");
});

app.listen(PORT, () => {
  `App is running on port no ${PORT}`;
});
