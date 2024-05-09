const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, immutable:true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  contact: [ String ],
  address: [ String ]
})

const User = mongoose.model("User", userSchema);

module.exports = User;