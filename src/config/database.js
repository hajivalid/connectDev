const mongoose = require("mongoose");

const connecrDB = async () => {
  await mongoose.connect(
    "mongodb+srv://hajivalid:0w8r6FfQYhEvrGVD@mongonode.9wk26.mongodb.net/connectDevDB"
  );
};
module.exports = connecrDB;
