const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.get("/user", (req, res) => {
  try {
    // get userdat with fetch
    throw new Error("userdata not getting");
    res.send({ firstName: "Ehan", lastName: "Shami" });
  } catch (err) {
    res.status(500).send("Something went wrong on user data!!!");
  }
});

//wild card errors Always write on end
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong!!!");
  }
});

app.listen(9993, () => {
  console.log("Server is successfully listening on port 9993...");
});
