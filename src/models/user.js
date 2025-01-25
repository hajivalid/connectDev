const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    lowercase: true,
    validate(value) {
        if(!["male", "female", "others"].includes(value))
            throw new Error("Gender data is not valid !!!")
    }
  },
  photoUrl: {
    type:String,
    default: "https://cdn-icons-png.flaticon.com/512/9187/9187532.png"
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    min: 10
  },
  skills: {
    type: [String],
    default: ["curious"]
  }
},
{ timestamps: true });

module.exports = mongoose.model("User", userSchema);
