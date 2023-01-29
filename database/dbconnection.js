const { MongoClient } = require("mongodb");
const uri = process.env.mongoDB_cred;
const client = new MongoClient(uri);
const BillDB = client.db("bill");
const bills = BillDB.collection("bills");

const dbConnected = () => {
  try {
    client.connect((err) => {
      if (!err) {
        console.log("database connected");
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

exports.dbConnected = dbConnected;
exports.db = { BillDB, bills };
