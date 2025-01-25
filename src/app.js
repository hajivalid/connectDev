const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json()); // to parse the incoming request with JSON payloads

app.post("/signup", async (req, res) => {
  const user = new User(req.body); // create a new user instance with the request body
  try {
    await user.save();
    res.send("User successfully created !!");
  } catch (err) {
    res.status(400).send("Error while creating user:" + err.message);
  }
});

// get user by emailId
app.get("/user", async (req, res) => {
  try {
    const userData = await User.find({ emailId: "aahna@gmail.com" });
    if (userData.length === 0) {
      return res.status(404).send("User not found !!");
    } else {
      return res.send(userData);
    }
  } catch (err) {
    res.status(400).send("Error while fetching user:" + err.message);
  }
});

// get all users
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).send("Users not found !!");
    } else {
      return res.send(users);
    }
  } catch (err) {
    res.status(400).send("Error while fetching user:" + err.message);
  }
});

// delete user by userId
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    //const userData = await User.findByIdAndDelete({_id:userId})
    const userData = await User.findByIdAndDelete(userId);
    if (!userData) {
      res.status(404).send("UserId not found !!");
    } else {
      res.send("User successfully deleted !!");
    }
  } catch (err) {
    res.status(400).send("Error while fetching user:" + err.message);
  }
});

// update user by userId
app.patch("/user/:userId", async (req, res) => {    
    const userId = req.params?.userId;
    const userData = req.body;
  try {
    const ALLOWED_UPDATES = ["firstName", "photoUrl", "gender", "skills"];
    const isAllowUpdates = Object.keys(userData).every((update) =>
      ALLOWED_UPDATES.includes(update)
    );

    if (!isAllowUpdates) {
      throw new Error("Invalid updates !!");
    }

    if (userData?.skills?.length > 10) {
      throw new Error("Skills length should not be greater than 10 !!");
    }

    //const updateduser = await User.findByIdAndUpdate({_id:userId, userData);
    const updateduser = await User.findByIdAndUpdate(userId, userData, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(updateduser);
    res.send("User successfully updated !!");
  } catch (err) {
    res.status(400).send("Error while fetching user: " + err.message);
  }
});

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
