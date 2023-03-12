const mongoose = require("mongoose");
const User = new mongoose.Schema({
  f_name: {
    type: String,
    required: [true, "first name should be provided"],
  },
  l_name: {
    type: String,
    required: [true, "last name should be provided"],
  },
  email: {
    type: String,
    required: [true, "email should be provided"],
    unique: true,
  },
  pass: {
    type: String,
    required: [true, "password should be provided"],
  },
});

module.exports = mongoose.model("user", User);
