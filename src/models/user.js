const mongoose = require("mongoose");
const validator = require("validator");

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
    trim: true,
    validate(val) {
        if(!validator.isEmail(val)){
            throw new Error("Email is not valid !!!")
        }
    }
  },
  password: {
    type: String,
    required: true,
    validate(val) {
        if(!validator.isStrongPassword(val)){
            let match = {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
                returnScore: false,
                pointsPerUnique: 1,
                pointsPerRepeat: 0.5,
                pointsForContainingLower: 10,
                pointsForContainingUpper: 10,
                pointsForContainingNumber: 10,
                pointsForContainingSymbol: 10
            };
            throw new Error(`Password should match with: ${JSON.stringify(match)} but got value: ${val}`);
        }
    }
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
            throw new Error("Gender data is not valid: " + value)
    }
  },
  photoUrl: {
    type:String,
    default: "https://cdn-icons-png.flaticon.com/512/9187/9187532.png",
    validate(val) {
        if(!validator.isURL(val)){
            throw new Error("Photo URL not valid: " + val)
        }
    }
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    min: 10,
  },
  skills: {
    type: [String],
    default: ["curious"]
  }
},
{ timestamps: true });

module.exports = mongoose.model("User", userSchema);
