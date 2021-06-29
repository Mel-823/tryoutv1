const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowerCase: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
