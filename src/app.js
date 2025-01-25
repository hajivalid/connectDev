const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');

app.use(express.json()); // to parse the incoming request with JSON payloads

app.post('/signup', async(req, res) => {

    const user = new User(req.body) // create a new user instance with the request body
    try{
        await user.save();
        res.send("User successfully created !!");
    }catch(err){
        res.status(400).send("Error while creating user:" + err.message);
    }
    
})

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
