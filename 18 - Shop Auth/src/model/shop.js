const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, immutable:true },
  shopname: { type: String, required: true },
  password: { type: String, required: true },
  contact: [ String ],
  address: [ String ]
})

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;