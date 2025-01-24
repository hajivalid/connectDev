const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB()
  .then(() => {
    console.log("successfully connected with cluster !!");
    app.listen(9993, () => {
      console.log("Server is successfully listening on port 9993...");
    });
  })
  .catch((err) => {
    console.log("Connection failed !!");
  });
